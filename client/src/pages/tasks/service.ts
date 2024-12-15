import axios from "axios";



export type typeTask = {
  _id: string
   title: string;
   description: string;
   dueDate: string;
   customer: typeof template 
   status: boolean;
 };


export async function SendToApiTasks() {
   
  const url = `http://localhost:4500/tasks`;
    const result = await axios.get<{ data: typeTask[] }>(url)


    const data = result?.data?.data.map(c => {
      return {
        _id: c._id,
        title: c.title,
        description: c.description,
        dueDate: c.dueDate,
        customer: c.customer,
        status: c.status,
      };
      })
     ;
 
     
     
      
      return data;
     }



     const template={
      "_id": "675d98fc6653980f3fba5c79",
      "name": "John Doe",
      "job": "Developer",
      "phone": 1234567890,
      "email": "john@example.com",
      "__v": 0
  }