const User = require('../models/User');
const bcrypt = require('bcrypt');

const handleRegister = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Username and password are required." });

  // Check if user already exists
  const existingUser = await User.findOne({ username }).exec();
  if (existingUser) return res.status(409).json({ message: "Username already taken." });

  try {
    // Hash the password
    const hashedPwd = await bcrypt.hash(password, 10);

    // Save user with hashed password
    const result = await User.create({
      username,
      password: hashedPwd
    });

    res.status(201).json({ message: `User ${username} registered successfully.` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed." });
  }
};

module.exports = { handleRegister };
