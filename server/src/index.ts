import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000;

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use("/api", blogRoutes);

mongoose
  .connect(process.env.DATABASE_URL as string)
  .then((x) =>
    // eslint-disable-next-line no-console
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running http://localhost:${PORT} 🚀 `);
});
