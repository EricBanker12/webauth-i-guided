const router = require('express').Router();

const Users = require('./users-model.js');
const reqAuth = require('../auth/requires-auth')

router.get('/', reqAuth, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
