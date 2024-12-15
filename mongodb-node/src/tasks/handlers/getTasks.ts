import { taskModel } from "../model";

export default async function getTasks() {
const result = await taskModel.find().populate('customer', '-tasks');
    return result;

    
}
    
    
    
  
   
    
