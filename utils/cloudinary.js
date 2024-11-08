const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Cloudinary Upload Image
exports.cloudinaryUploadImage = async (fileBuffer, fileName) => {
  try {
    const data = await cloudinary.uploader.upload(fileBuffer, {
      resource_type: "auto",  // تلقائي لتحديد نوع المحتوى
      public_id: fileName,   // تعيين اسم فريد للصورة
    });
    return data;
  } catch (error) {
    console.log("Error uploading image to Cloudinary:", error);
    throw new Error("Error uploading image to Cloudinary");
  }
};

