const User = require("../models/User");

// Register
exports.registerUser = async(req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });
  await user.save();

  res.json({ message: "User Registered", user });
};

// Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.json({ success: false, message: "User not found" });
  if (user.password !== password)
    return res.json({ success: false, message: "Wrong password" });

  res.json({ success: true, message: "Login Success", user });
};

// Get all
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Delete
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User Deleted" });
};
