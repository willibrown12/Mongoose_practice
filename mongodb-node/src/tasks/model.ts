import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' } ,
  status: { type: Boolean, default: false }, 
});

const taskModel = mongoose.model('Task', taskSchema);  
export { taskModel };


export type typeTask = {
   _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    dueDate: Date;
    customer: mongoose.Types.ObjectId;
    status: boolean;
  };
  