import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// middleware

// cross origin
app.use(
  cors({
    origin: ['http://localhost:3000'], // Allow frontend origin
    credentials: true, // Allow cookies
    options: ['GET', 'POST'], // Allow the request methods
  })
);

// parser
app.use(bodyParser.json());

// cookies
app.use(cookieParser());

// api routes
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //database connected
    console.log('MongoDB Connected');

    // start server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.error('MongoDB Connection Error:', err));
