const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const authRoute = require('./routes/auth');
const momentRoutes = require('./routes/moments');
const momentUploadRoutes = require('./routes/momentUpload');
const verifyTokenRoute = require('./routes/verifyToken');

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('connected to db');
    }
  }
);

app.use(fileUpload());
app.use(cors());
app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/token', verifyTokenRoute);
app.use('/api/moment', momentRoutes);
app.use('/api/fileUpload', require('./routes/momentUpload'));

app.listen(8000, () => console.log('server up and running'));
