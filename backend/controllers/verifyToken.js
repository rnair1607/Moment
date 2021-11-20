const jwt = require('jsonwebtoken');

// function tokenVerify(req, res) {
//   const token = req.header('auth-token');
//   if (!token) return res.status(401).send('Access denied');

//   try {
//     const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//     req.user = verified;

//     res.status(200).send(verified);
//   } catch (err) {
//     res.status(400).send('Invalid token');
//   }
// }
function tokenVerify(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.body.user = verified._id;
    req.body.name = verified.name;
    req.body.email = verified.email;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
}

module.exports = { tokenVerify: tokenVerify };
