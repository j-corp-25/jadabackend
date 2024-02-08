module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: "JADA", // Specify the folder name here
        },
        uploadStream: {
          folder: "JADA", // Specify the same folder name here if using stream uploads
        },
        delete: {},
      },
    },
  },
  // ...
});
