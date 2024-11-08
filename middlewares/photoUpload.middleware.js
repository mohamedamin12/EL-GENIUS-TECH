const path = require("path");
const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 1, 
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

