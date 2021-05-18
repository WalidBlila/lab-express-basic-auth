const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);


// const auth = require('./routes/auth.routes');

// const { Router } = require('express');
// // const router = new Router();

router.get('/signup',(req,res,next) => {
    res.render('auth/signup')
});

router.post('/signup', (req, res, next) => {
    const username = req.body.name;
    const password = req.body.password;
    const passwordHash = bcryptjs.hashSync(password,salt);
  

  User.create({
    username,
    passwordHash: hashedPassword
  })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
    })
    .catch(error => next(error));
});

module.exports = router;