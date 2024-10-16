import axios from "axios";
import FormData from "form-data"; 
import { promises as fs } from "fs"; 
import { createReadStream } from "fs"; 

const uploadToImgur = async (formData) => {
    const response = await axios.post("https://api.imgur.com/3/image", formData, {
        headers: {
            "Authorization": `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
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

    console.log("Uploading file: ", req.file);

    const formData = new FormData();
    formData.append("image", createReadStream(filePath), {
        filename: originalname, 
        contentType: mimetype,
    });

    try {
        const imgurLink = await uploadToImgur(formData); 
        res.json({
            link: imgurLink,
            message: "Image uploaded successfully",
        });
    } catch (error) {
        console.error("Error details:", error.response ? error.response.data : error.message);
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
