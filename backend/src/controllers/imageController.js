import axios from "axios";
import FormData from "form-data"; 
import fs from "fs/promises"; // Import promises version of fs
import { createReadStream } from "fs"; // Import createReadStream from fs

const uploadImage = async (req, res) => {
    console.log("req.file ", req.file);
    
    const filePath = req.file.path; 
    let imgurLink;

    // Create a new FormData instance
    const formData = new FormData();

    try {
        // Create a readable stream for the file
        const fileStream = createReadStream(filePath); 
        
        formData.append("image", fileStream, {
            filename: req.file.originalname, 
            contentType: req.file.mimetype
        });
        
        // Upload to Imgur
        const response = await axios.post("https://api.imgur.com/3/image", formData, {
            headers: {
                "Authorization": `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
                ...formData.getHeaders(), 
            },
        });

        imgurLink = response.data.data.link;

        // Send the response to the client
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
        // Attempt to delete the local file
        try {
            await fs.unlink(filePath);
            console.log(`Successfully deleted local file: ${filePath}`);
        } catch (err) {
            console.error(`Error deleting file: ${err.message}`);
        }
    }
};

export { uploadImage };
