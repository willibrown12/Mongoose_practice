import express, { NextFunction, Request, Response } from "express"
import getTasks from "./handlers/getTasks"
import { create } from "ts-node"
import createTasks from "./handlers/createTask"
import { taskSchema } from "./handlers/zodScheme/zod"
import { typeTask } from "./model"

const router = express.Router()
router.get("/", async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const data = await getTasks()
   
    
            return res.json({ data })
       
    } catch (error) {
        return next(error)
    }
})



router.post("/", async (req: Request, res: Response)  :Promise<any>=> {
  try {

    taskSchema.parse(req.body);

    
    const newTask = extractTask(req.body);

    
    const result = await createTasks(newTask);
     return res.status(200).json({ result });
  } catch (error: any) {
   
    console.error("Error:", error?.message || error);
    return res.status(400).json({ error: "Something went wrong" });
  }
});




router.post("/", async (req: Request, res: Response)  :Promise<any>=> {
    try {
  
      taskSchema.parse(req.body);
  
      
      const newTask = extractTask(req.body);
  
      
      const result = await createTasks(newTask);
       return res.status(200).json({ result });
    } catch (error: any) {
     
      console.error("Error:", error?.message || error);
      return res.status(400).json({ error: "Something went wrong" });
    }
  });


  router.put("/", async (req: Request, res: Response)  :Promise<any>=> {
    try {
  
      taskSchema.parse(req.body);
  
      
      const newTask = extractTask(req.body);
  
      
      const result = await createTasks(newTask);
       return res.status(200).json({ result });
    } catch (error: any) {
     
      console.error("Error:", error?.message || error);
      return res.status(400).json({ error: "Something went wrong" });
    }
  });
  
  


  
  
function extractTask(body: any): typeTask {
    const { _id, title, description, dueDate, customer, status } = body;
  
    return {
      _id,
      title,
      description,
      dueDate,
      customer,
      status
    };
  }
export default router;


export { router };
