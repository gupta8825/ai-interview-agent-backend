import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://sahilgupta882526_db_user:RM1Pczx0krj662LW@cluster0.dvqrkxc.mongodb.net/Agent");
    console.log("DataBase Connected");
  } catch (error) {
    console.log(`DataBase Error ${error}`);
  }
};

export default connectDb;
