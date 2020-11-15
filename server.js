import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config.js";

import serviceRoutes from "./routes/serviceRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

// App config
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api/services", serviceRoutes);
app.use("/api/booking", bookingRoutes);

// DB config
mongoose.connect(process.env.DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB is connected");
});

// api routes
app.get("/", (req, res) => res.status(200).send("This server is running"));

//listen
app.listen(port, () => console.log(`Listening or the port : ${port}`));
