const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); 
const userRouter = require('./routes/users');

const app = express();
const PORT = 3000;
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('MongoDB connected successfully');
  const userCount = await User.countDocuments();
  if (userCount === 0) {
    await User.insertMany([
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 22 }
    ]);
    console.log('Sample users inserted into the database');
  }
})
.catch(err => console.error('MongoDB connection error:', err));
app.use('/users', userRouter);
app.get('/', (req, res) => {
  res.send("Welcome to Express server + MongoDB with initial data!");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
