const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./auth-modal');

function generateToken(user) {
  const payload = {
      username: user.name,
  };
  const options = {
      expiresIn: '1d',
  };
  return jwt.sign(payload, process.env.JWT_SECRET || 'lalalalkdjhaha', options);
}

router.post('/register', (req, res) => {
  // implement registration
  const { username, password } = req.body;
    Users.insert({ username, password: bcrypt.hashSync(password, 8) })
        .then(id => {
            res.status(201).json({ message: "User registered", id });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error registering user"});
        });
  
});

router.post('/login', (req, res) => {
  // implement login
  const { username, password } = req.body;
    Users
        .findByUsername(username)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {   
                const token = generateToken(user);     
            res.status(200).json({ 
                message: `Welcome back! ${ user.username }`,
                token
            });
            } else {
                res.status(401).json({ error: "Invalid password", id });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Error registering user"});
        });
});

module.exports = router;
