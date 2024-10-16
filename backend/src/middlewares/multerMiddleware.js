import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/"); 
  },
  filename: (req, file, cb) => {
    const date = new Date();

    // Format date as DD-MM-YYYY
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    // Format time as HH:MM:SS AM/PM
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format

    const timeStr = `${String(hours).padStart(2, '0')}-${minutes}-${seconds}-${ampm}`; // Change ':' to '-'
    const dateStr = `${day}-${month}-${year}`; // Change '/' to '-'

    // Construct final filename
    cb(null, `${timeStr}-${dateStr}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50, // Set file size limit to 50MB
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword"
    ) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error("Unsupported file type"), false); 
    }
  },
});

export default upload;
