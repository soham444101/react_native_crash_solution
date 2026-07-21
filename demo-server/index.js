import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Demo server is running 🚀",
    time: new Date(),
  });
});

app.post("/location", (req, res) => {
  console.log("Location:", req.body);

  res.json({
    success: true,
    received: req.body,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});