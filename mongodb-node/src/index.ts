import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
const app = express();
import { router as customersRouter } from "./customers/index"
import { router as tasksRouter } from "./tasks/index"
import connectToDB from "./db/index"
import { generateData } from "./generateData";
import bodyParser from "body-parser"


app.use(cors())
 connectToDB()
 app.use(bodyParser.json())
app.get("/health-check", (req, res, next) => {
    res.status(200).send("Api is working!")
})

app.use("/customers", customersRouter)
app.use("/tasks", tasksRouter)

app.use((error: any, req: any, res: any, next: any) => {
    res.status(409).send("Something went Wrong")
})



// generateData()


app.listen(process.env.PORT)