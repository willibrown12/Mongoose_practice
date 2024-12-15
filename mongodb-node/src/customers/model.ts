import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: String,
  job: String,
  phone: Number,
  email: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }] // Fix reference to 'Task'
});

const customerModel = mongoose.model("Customer", customerSchema, "customer"); // Use consistent model name
export { customerModel };