const Users = require('../users/users-model')
const bcrypt = require('bcryptjs')

module.exports = function (req, res, next) {
    let { username, password } = req.headers;

    if (!username || !password) return res.status(400).json({message: 'Please provide credentials'})

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        next()
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
}