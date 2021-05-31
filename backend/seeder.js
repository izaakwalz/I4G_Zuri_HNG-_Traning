// const fs = require('fs');
// const dotenv = require('dotenv');
// const Post = require('./models/post.model');
// const connectDB = require('./config/db');

// dotenv.config();

// connectDB();

// const posts = JSON.parse(fs.readFileSync(`./data/post.json`, 'utf-8'));

// const importData = async () => {
//   try {
//     await Post.insertMany(posts);
//     console.log('success');
//     process.exit();
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// };

// if (process.argv[2] === '-i') {
//   importData();
// }

// const ggg = Math.round((50.5 / 100) * 100);

// const grade =
//   ggg >= 90 ? 'A' : ggg >= 75 ? 'B' : ggg >= 50 ? 'C' : ggg >= 40 ? 'D' : 'F';
// console.log(ggg);
// console.log(grade);

// console.log(Math.round((ggg / 100) * 100));

// const score = { score: 70 };

// const data = JSON.stringify(score);

// console.log(data);
