import { taskModel, typeTask } from "../model";

export default async function createTask(taskData:typeTask) {
    const newTask = await taskModel.create(taskData);
    const result = await taskModel.findById(newTask._id).populate('customer');


    return result;

    
}
    
    
    
  