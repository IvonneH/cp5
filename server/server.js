const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27018/cp5', {
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const users = require("./users.js");
app.use("/api/users", users.routes);


const multer = require('multer')
const upload = multer({
  dest: '/var/www/cp5.hiltonivonne.com/images/',
  limits: {
    fileSize: 10000000
  }
});

//const photos = require("./photos.js");
//app.use("/api/photos", photos.routes);
// const multer = require('multer')
// const upload = multer({
//   dest: '/var/www/cp5.hiltonivonne.com/',
//   limits: {
//     fileSize: 10000000
//   }
// });

app.listen(3005, () => console.log('Server listening on port 3005!'));