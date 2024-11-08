const path = require("path");
const multer = require("multer");

// Photo Storage
const storage = multer.memoryStorage(); 

// upload photo
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb({ message: "Unsupported file format" }, false);
    }
  },
});




module.exports = upload;