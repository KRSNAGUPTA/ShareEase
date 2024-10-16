import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import imageRoute  from "./src/routes/imageRoute.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const corsOrigin = process.env.CORS_ORIGIN || "*";

const app = express();
app.use(express.json());
app.use(cors({ origin: corsOrigin }));

app.get("/api", (req, res) => {
    res.send("Backend mai aapka swagat hai!");
});
app.use('/api/image', imageRoute);

app.listen(PORT, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
  } else {
    console.log(`\nServer is running on port ${PORT} \n`);
  }
});
