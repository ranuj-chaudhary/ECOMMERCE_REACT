import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import dbConnect from './utiles/db.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// middleware

// cross origin

app.use(
  cors({
    origin: ['http://localhost:3000'], // Allow frontend origin
    credentials: true, // Allow cookies
    methods: ['GET', 'POST'], // Allow the request methods
  })
);

// parser
app.use(bodyParser.json());

// cookies
app.use(cookieParser());

// api routes
app.use('/api', authRoutes);

// connect mongodb
dbConnect();

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
