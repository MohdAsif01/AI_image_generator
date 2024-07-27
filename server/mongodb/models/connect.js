import mongoose from 'mongoose';


const connectDB = () => {
  // mongoose.set('strictQuery', true);
  mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;