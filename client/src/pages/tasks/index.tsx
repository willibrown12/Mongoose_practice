import { useEffect, useState } from "react"




import { Button, InputLabel, MenuItem, Select, SelectChangeEvent, Table, TableContainer, } from "@mui/material";
import { SendToApiTasks,typeTask } from "./service";


import Paper from '@mui/material/Paper';
import TableTHeadComp from "./tableHead";
import TableBodyComp from "./tableBody";

export type RowType = {
  "id": string;
  "Title": string;
  "Description": string;
  "Due Date": string;
  "Customer ID": string;
  "Customer Name": string;
  "Status": string;
};



export function Tasks() {




 const [tasks, setTasks] = useState<Array<typeTask>>([])
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    let isSetState = true
    async function tableStart() {
      try {
        setIsLoading(true)
        const status: any = await SendToApiTasks()
       
      
        
       
        if (isSetState) {

          setTasks(status)
      console.log(status);
      
       
        }

      } catch (error) {
        alert(error)
      } finally {
        setIsLoading(false)
      }
    }
    tableStart()
    return () => {
      isSetState = false;
    }
  }, [])






  function createData(
    _id: string,
    title: string,
    description:string,
    dueDate: string,
    customerID: string,
    customerName:string,
    status: boolean,
   
  ): RowType {
    return {
      "id": _id,
      "Title": title,
      "Description":description,
      "Due Date":  new Date(dueDate).toISOString(),
      "Customer ID": customerID,
      "Customer Name":customerName,
      "Status": status ? "Completed" : "Not Completed" ,
    };
  }


  const rows: Array<RowType> = []

  tasks?.map((c) => {
    rows.push(
      createData(
        c._id,
        c.title,
        c.description,
        c.dueDate,
        c.customer._id,
        c.customer.name,
        c.status
      )
    )
  });






  return (
    <div>
      <h1>Table Meetings</h1>
      
      {isLoading ? (
        <h1>Loading...</h1>
      ) : rows.length > 0 ? (
        <TableContainer component={Paper}>
          <Table  aria-label="customized table">
            <TableTHeadComp columns={Object.keys(rows[0])} />
            <TableBodyComp data={rows} />
          </Table>
        </TableContainer>
      ) : (
        <h2>No data available</h2>
      )}
    </div>
  )
 }
















