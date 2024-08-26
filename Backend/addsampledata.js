// addSampleData.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Post = require('./models/Post');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => console.error(err));

const samplePosts = [
    {
      title: 'Best Burritos at Caltech',
      description: 'If you love burritos, you must try the ones at the campus cafeteria. They are simply the best!',
      author: '64ea4a9f8f8a234c43f7b5d7', // Replace with a valid user ID from your database
      createdAt: new Date('2024-08-01')
    },
    {
      title: 'Top 5 Coffee Shops Around Caltech',
      description: 'Need a caffeine fix? Here are the top 5 coffee shops near Caltech that you should definitely check out!',
      author: '64ea4a9f8f8a234c43f7b5d7', // Replace with a valid user ID from your database
      createdAt: new Date('2024-08-15')
    },
    {
      title: 'Late Night Snacks in Pasadena',
      description: 'Studying late? Here are some great spots for late-night snacks that are open around the clock.',
      author: '64ea4a9f8f8a234c43f7b5d7', // Replace with a valid user ID from your database
      createdAt: new Date('2024-08-20')
    }
  ];
  

const insertSampleData = async () => {
  try {
    await Post.insertMany(samplePosts);
    console.log('Sample data inserted');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting sample data:', err);
  }
};

insertSampleData();
