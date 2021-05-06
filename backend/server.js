const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/error-handler');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

const PORT = process.env.PORT || 2021;

app.listen(PORT, async () => {
  await connectDB();
  console.log(
    `:-:-:> Server runing in ${process.env.NODE_ENV} mode on port :> ${PORT}`
  );
});
