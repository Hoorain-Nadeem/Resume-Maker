let express = require("express");
let mongoose = require("mongoose");
let multer = require("multer");
let router = express.Router();
let Media = require("../models/media");

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/gif",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images and videos are allowed"), false);
  }
};

let storage = multer.memoryStorage();
let upload = multer({ storage, fileFilter });

router.post("/upload", upload.single("photo"), async (req, res) => {
  let base64 = req.file.buffer.toString("base64");
  let mimetype = req.file.mimetype;
  let originalName = req.file.originalname;
  let { name, email,skills ,address,Github,Linkedin,Role,About} = req.body;
  console.log(req.file);
  let obj = new Media({
    name,
    email,
    skills,
    address,
    Github,
    Linkedin,
    Role,
    About,
    photo: base64,
    mimetype,
    originalName
  });
  await obj
    .save()
    .then(() => {
      res.send({
        message: "inserted successfully!",
        obj,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/resume/:id", async (req, res) => {
  let { id } = req.params;
  let data = await Media.findOne({ _id: id });
  if (!data) {
    res.send({
      status: false,
      mesage: "data not found",
    });
  }
  res.send({
    status: true,
    message: "found",
    data,
  });
});
module.exports = router;
