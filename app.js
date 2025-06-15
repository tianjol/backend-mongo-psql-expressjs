const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./config/db');
const connectMongo = require('./config/mongo');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // optional: { force: true }
    await connectMongo();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Server failed to start:', error);
  }
};

startServer();
