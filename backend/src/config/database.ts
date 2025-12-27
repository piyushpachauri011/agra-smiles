import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb+srv://dental:dental%40123@agra-smiles-cluster.uyk9mek.mongodb.net/agra-smiles';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Attempt to continue despite connection error
  }
};
