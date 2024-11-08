const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Cloudinary Upload Image
const cloudinaryUploadImage = async (filePath) => {
  try {
    const data = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error uploading to Cloudinary");
  }
};

// Cloudinary Remove Image
const cloudinaryRemoveImage = async (imagePublicId) => {
  try {
    const data = await cloudinary.uploader.destroy(imagePublicId);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error (cloudinary)");
  }
};


module.exports = {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
};