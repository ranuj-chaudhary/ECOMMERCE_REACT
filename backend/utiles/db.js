import mongoose from 'mongoose';


const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ecommerce', {
      useNewUrlParser: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error.message);
  }
};

export default dbConnect;
