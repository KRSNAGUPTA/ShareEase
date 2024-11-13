import slugLinkModel from "../models/slugLinkModel.js";
import cloudinary from "../cloudinaryConfig.js";
import { promises as fs } from "fs";
import path from "path";

const uploadCloudinary = async (filePath, isImage) => {
  try {
    const uploadOptions = {
      folder: "shareEase",
      access_mode: "public",
    };

    if (isImage) {
      uploadOptions.resource_type = "image";
    } else {
      uploadOptions.resource_type = "raw";
    }

    const uploaded = await cloudinary.uploader.upload(filePath, uploadOptions);
    return uploaded.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Error while uploading file to Cloudinary");
  }
};

const deleteFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    console.error("File deletion error:", error);
    throw new Error("Error while deleting file");
  }
};

const uploadFile = async (req, res) => {
  try {
    const { path: filePath, mimetype } = req.file;
    const { slug } = req.body;

    if (!slug) {
      return res.status(400).json({ message: "Please provide a slug" });
    }

    const alreadyUsed = await slugLinkModel.findOne({ slug: slug });
    if (alreadyUsed) {
      return res.status(409).json({ message: `${slug} already used` });
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/gif",
    ];

    if (!allowedTypes.includes(mimetype)) {
      return res.status(400).json({
        message:
          "Invalid file type. Only PDFs, Word files, and images are allowed.",
      });
    }

    const isImage = mimetype.startsWith("image/");

    const uploadedUrl = await uploadCloudinary(filePath, isImage);
    deleteFile(filePath);

    const data = {
      slug: slug,
      originalLink: uploadedUrl,
    };
    await slugLinkModel.create(data);

    res.status(201).json({
      link: uploadedUrl,
      slug: slug,
    });
  } catch (error) {
    console.error("File upload error:", error);
    res.status(500).json({
      message: "Something went wrong while uploading the file to Cloudinary",
    });
  }
};

export { uploadFile };
