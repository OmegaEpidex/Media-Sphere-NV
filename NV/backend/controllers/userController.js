const User = require('../models/User'); // Assuming you have a User model defined

// Controller to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password field from the response
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Controller to get a single user by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId, '-password'); // Exclude password field from the response

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Controller to create a new user
const createUser = async (req, res) => {
  try {
    // Assuming the request body contains the necessary user data (e.g., name, email, password)
    const { name, email, password } = req.body;

    // Check if the user with the provided email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create the new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    // Exclude password field from the response
    const savedUser = newUser.toObject();
    delete savedUser.password;

    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Controller to update user information
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // Assuming the request body contains the fields to be updated (e.g., name, email)
    const updatedFields = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
      new: true, // Return the updated user
      runValidators: true, // Run model validations on the updated fields
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Exclude password field from the response
    const savedUser = updatedUser.toObject();
    delete savedUser.password;

    res.json(savedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Controller to delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Exclude password field from the response
    const removedUser = deletedUser.toObject();
    delete removedUser.password;

    res.json(removedUser);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
