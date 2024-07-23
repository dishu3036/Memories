import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/postRoutes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://kiarajm12:kiarajm12@cluster0.u8uo1kc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
