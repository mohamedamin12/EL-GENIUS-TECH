const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Cloudinary Upload Image
const cloudinaryUploadImage = async (fileBuffer, fileName) => {
  try {
    const data = await cloudinary.uploader.upload(fileBuffer, {
      resource_type: "auto",
      public_id: fileName,
      eager: [
        {
          width: 800,
          height: 800,
          crop: "limit",
        },
      ], 
    });
    return data;
  } catch (error) {
    console.log("Error uploading image to Cloudinary:", error);
    throw new Error("Error uploading image to Cloudinary");
  }
};

module.exports = {
  cloudinaryUploadImage,
};


