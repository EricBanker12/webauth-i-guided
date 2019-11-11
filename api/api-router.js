const router = require('express').Router();
const bcrypt = require('bcryptjs')

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  // read password, hash it, return to user {password, hash}
  const password = req.body.password
  res.json({password, hash: bcrypt.hashSync(password)})
});

module.exports = router;
