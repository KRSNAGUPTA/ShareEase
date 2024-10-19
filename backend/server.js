import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import imageRoute from "./src/routes/imageRoute.js";
import linkRoute from "./src/routes/shortLinkRoute.js";
import { checkSlug, getLink } from "./src/controllers/slugControllers.js";
import connectDB from "./src/config/db.js";

// Load environment variables
dotenv.config();

// Connect to the database
connectDB().catch(err => {
  console.error("Database connection error:", err);
});

const PORT = process.env.PORT || 4000;
const corsOrigin = process.env.CORS_ORIGIN || "*";

const app = express();

// Middleware for JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({ origin: corsOrigin }));

// Basic test route
app.get("/api", (_, res) => {
  res.send("Backend mai aapka swagat hai!");
});

// Route for checking slugs
app.get('/api/checkslug/:slug', checkSlug);
// Route for getting originalLink
app.get('/api/getlink/:slug', getLink);

// Route for image-related requests
app.use('/api/image', imageRoute);
app.use('/api/link',linkRoute );

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
