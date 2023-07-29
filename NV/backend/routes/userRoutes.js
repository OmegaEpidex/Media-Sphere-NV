const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Route: /api/users
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

// Route: /api/users/:userId
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
