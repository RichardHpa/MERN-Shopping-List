const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');

// Item Model
const User = require('../../models/User');

// @route POST api/auth
// @desc Auth user
// @access Public
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    // Simple validation
    if(!name || !email || !password){
        return res.status(400).json({msg: 'Please enter all fields'})
    }

    //Check for user
    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exist' });

            // Validate MONGO_PASSWORD
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    jwt.sign(
                        { id: user._id },
                        process.env.jwtSecret,
                        // This token will expire in an hour
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    );
                })
        })
});

module.exports = router;
