import axios from "axios";
import FormData from "form-data";
import { promises as fs } from "fs";
import { createReadStream } from "fs";
import SlugLink from "../models/slugLinkModel.js";
import generateUniqueSlug from "../utils/generateSlug.js";

const uploadToImgur = async (formData) => {
  const response = await axios.post("https://api.imgur.com/3/image", formData, {
    headers: {
      Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
      ...formData.getHeaders(),
    },
  });
  return response.data.data.link;
};

const deleteLocalFile = async (filePath) => {
  await fs.unlink(filePath);
  console.log(`Successfully deleted local file: ${filePath}`);
};

const uploadImage = async (req, res) => {
  const { path: filePath, originalname, mimetype } = req.file;
  let { slug } = req.body;

  // Check if slug is already used
  const slugAvailable = await SlugLink.findOne({ slug });
  if (slugAvailable) {
    return res.status(409).json({ message: `${slug} already used` });
  }
  
  if(!slug){
    slug = await generateUniqueSlug();
  }
  
//   console.log("Uploading file: ", req.file);

  // Prepare form data for Imgur
  const formData = new FormData();
  formData.append("image", createReadStream(filePath), {
    filename: originalname,
    contentType: mimetype,
  });

  try {
    const imgurLink = await uploadToImgur(formData);
    if (imgurLink) {
      const data = {
        slug,
        originalLink: imgurLink,
      };

      // Save the slug and imgur link to the database
      await SlugLink.create(data); // Use create instead of insert
    }
    
    res.json({
      link: imgurLink,
      slug:slug,
      message: "Image uploaded successfully",
    });
  } catch (error) {
    console.error(
      "Error details:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({
      error: `Error uploading image: ${error.message}`,
    });
  } finally {
    try {
      await deleteLocalFile(filePath);
    } catch (err) {
      console.error(`Error deleting file: ${err.message}`);
    }
  }
};

export { uploadImage };
