// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  age: Number,
  location: String,
});
const User = mongoose.model("User", userSchema);

// APIs
app.post("/api/create-user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/get-random-user", async (req, res) => {
  try {
    const count = await User.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomUser = await User.findOne().skip(randomIndex);
    res.json(randomUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/check-user-existence", async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.findOne({ name });
    res.json(user !== null);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/users-above-age", async (req, res) => {
  try {
    const { age } = req.body;
    const users = await User.find({ age: { $gte: age } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/list-user-names", async (req, res) => {
  try {
    const users = await User.find({}, "name");
    res.json(users.map((user) => user.name));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
