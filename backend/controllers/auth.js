const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/user');
const { registerValidation, loginValidation } = require('../validation');

//Register a user and return a token
const registerAuth = async (req, res) => {
  // console.log(req);
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  try {
    const emailExists = await User.findOne({ email: req.body.email });

    if (emailExists)
      return res.status(400).send({ message: 'Email already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      city: req.body.city,
      mobileNo: req.body.mobileNo,
    });
    const savedUser = await user.save();

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.firstName + ' ' + user.lastName,
        email: user.email,
      },
      process.env.TOKEN_SECRET
    );
    res.header('auth-token', token).json({
      _id: user._id,
      name: user.firstName + ' ' + user.lastName,
      email: user.email,
      token,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Login a user and return a token
const loginAuth = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).json({ message: 'Password invalid' });

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.firstName + ' ' + user.lastName,
        email: user.email,
      },
      process.env.TOKEN_SECRET
    );
    res.header('auth-token', token).json({
      _id: user._id,
      name: user.firstName + ' ' + user.lastName,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { registerAuth: registerAuth, loginAuth: loginAuth };
