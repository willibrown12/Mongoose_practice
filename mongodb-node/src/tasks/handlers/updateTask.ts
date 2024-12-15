import mongoose from "mongoose";
import { taskModel, typeTask } from "../model";

export default async function updateTask( updateData:typeTask)  {
    const updatedTask = await taskModel.findByIdAndUpdate(
      updateData._id, 
        updateData, 
        { new: true } 
      );
      
      if (!updatedTask) {
        throw new Error("Task not found");
      }
      
      return updatedTask;
    
}
    
    
    
  