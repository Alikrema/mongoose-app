const router = require("express").Router();
const jsend = require("jsend");
const upload = require("../common/multerService");

router.post("/upload-single", upload.single("file"), (req, res) => {
  res.send(jsend.success({ message: "File uploaded successfully!" }));
});

router.post("/upload-array", upload.array("files", 5), (req, res) => {
  res.send(jsend.success({ message: "Files uploaded successfully!" }));
});

module.exports = router;
