let express = require("express");
let mongoose = require("mongoose");
const router = require("./routes/mediaRoutes");
require("dotenv").config();
let cors = require("cors");

let app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/media", router);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
})
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

module.exports = app;
