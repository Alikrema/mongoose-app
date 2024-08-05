const multer = require("multer");
const UnsupportedFileType = require("../Errors/UnsupportedFileType");
const fs = require("fs");
const path = require("path");

const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB
  },
});

module.exports = upload;
