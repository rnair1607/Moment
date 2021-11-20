const router = require('express').Router();

const Moment = require('../model/Moment');
const { tokenVerify } = require('../controllers/verifyToken');

//Create a moment
router.post('/create', tokenVerify, async (req, res) => {
  //   console.log(req);
  const newMoment = new Moment(req.body);
  try {
    const savedMoment = await newMoment.save();
    res.status(200).send(savedMoment);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Get a moment
router.get('/getMoment/:id', tokenVerify, async (req, res) => {
  try {
    const moment = await Moment.findById(req.params.id);
    res.status(200).send(moment);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Get all moments
router.get('/allMoments', tokenVerify, async (req, res) => {
  try {
    const moments = await Moment.find().sort({ created: -1 });
    res.status(200).send(moments);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Update a moment
router.put('/updateMoment/:id', tokenVerify, async (req, res) => {
  try {
    const updatedMoment = await Moment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedMoment);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Delete a moment
router.delete('/deleteMoment/:id', tokenVerify, async (req, res) => {
  try {
    const deletedMoment = await Moment.findByIdAndDelete(req.params.id);
    if (deletedMoment) {
      res.status(200).send({ success: true });
    } else {
      res.status(404).send({ success: false });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
