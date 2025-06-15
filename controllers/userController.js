const UserPG = require('../models/UserPostgres');
const UserMongo = require('../models/UserMongo');

// POST: create user di PG & Mongo
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const userPg = await UserPG.create({ name, email });
        const userMongo = await UserMongo.create({ name, email });
        res.status(201).json({ pg: userPg, mongo: userMongo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// GET: all users (dari PG)
exports.getUsers = async (req, res) => {
    try {
        const users = await UserPG.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  // PUT: update user (PG + Mongo)
  exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const userPg = await UserPG.findByPk(id);
        if (!userPg) return res.status(404).json({ error: 'User not found' });
    
        await userPg.update({ name, email });
        await UserMongo.updateOne({ email: userPg.email }, { name, email });
    
        res.json({ pg: userPg, message: 'User updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  // DELETE: delete user
  exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userPg = await UserPG.findByPk(id);
        if (!userPg) return res.status(404).json({ error: 'User not found' });
    
        await userPg.destroy();
        await UserMongo.deleteOne({ email: userPg.email });
    
        res.json({ message: 'User deleted from both DBs' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  // GET: all users from MongoDB
exports.getMongoUsers = async (req, res) => {
    try {
      const users = await UserMongo.find(); // ambil semua user dari koleksi MongoDB
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  
  // GET: find MongoDB user by email (query param)
exports.findMongoByEmail = async (req, res) => {
    const { email } = req.query;
    try {
      const user = await UserMongo.findOne({ email });
      if (!user) return res.status(404).json({ error: 'User not found in MongoDB' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  