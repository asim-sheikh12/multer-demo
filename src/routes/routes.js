const express = require("express");
const { uploadMultiple } = require("../controller/multer");
const Upload = require("../models/imageUpload");
const router = new express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});
router.post("/uploadfile", uploadMultiple, async (req, res, next) => {
  if (req.files) {
    const { originalname, mimetype, filename, path, size } = req.files;
    const uploadData = req.files;
    uploadData.map(async (item) => {
      console.log(item);
      await Upload.create(item);
    });
    console.log("files uploaded");
    res.status(201).json({
      status: 201,
      success:true,
      messgae: "Files uploaded successfully",
    });
  }
});
module.exports = router;
