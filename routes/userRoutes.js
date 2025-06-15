const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST: Create user di PostgreSQL + Mongo
router.post('/users', userController.createUser);

// GET: Ambil semua user dari PostgreSQL
router.get('/users', userController.getUsers);

// PUT: Update user (PG + Mongo)
router.put('/users/:id', userController.updateUser);

// DELETE: Hapus user (PG + Mongo)
router.delete('/users/:id', userController.deleteUser);

// ✅ Tambahan:

// GET: Ambil semua user dari MongoDB
router.get('/mongo/users', userController.getMongoUsers);

// GET: Cari user MongoDB berdasarkan email (pakai query param)
router.get('/mongo/user', userController.findMongoByEmail);

module.exports = router;
