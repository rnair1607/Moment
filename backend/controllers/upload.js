const { cloudinary } = require('../utils/cloudinaryUtil');

const momentUpload = async (req, res) => {
  try {
    // console.log(req.body);
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'moment_upload',
    });
    // console.log(uploadedResponse);
    res.json({
      url: uploadedResponse.url,
      public_id: uploadedResponse.public_id,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const momentDelete = async (req, res) => {
  try {
    const { public_id } = req.body;
    const deletedResponse = await cloudinary.uploader.destroy(public_id);
    // console.log(deletedResponse);
    res.json(deletedResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { momentUpload, momentDelete };
