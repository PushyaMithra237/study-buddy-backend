const User = require('../models/User');
const bcrypt = require('bcrypt'); // Make sure this is imported

const handleLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  const foundUser = await User.findOne({ username }).exec();

  if (!foundUser) {
    return res.status(401).json({ message: "Invalid username." });
  }

  // ✅ Use bcrypt to compare entered password with stored hashed password
  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) {
    return res.status(401).json({ message: "Incorrect password." });
  }

  res.status(200).json({ message: `User ${username} logged in successfully.` });
};

module.exports = { handleLogin };
