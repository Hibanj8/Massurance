import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
   
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    enum:['admin','superadmin'],
    default:'admin'
  }
});



export default mongoose.models.Admin || mongoose.model('Admin', adminSchema) ;
