const { cloudinary } = require('../utils/cloudinaryUtil');

const momentUpload = async (req, res) => {
  try {
    // console.log(req.body);
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'moment_upload',
    });
    res.json({ url: uploadedResponse.url });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { momentUpload };
