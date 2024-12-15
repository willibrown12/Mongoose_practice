import mongoose from "mongoose"
import { z, } from "zod"


const titleSchema = z.string()
const descriptionSchema = z.string()
const dueDateSchema = z.date()
const customerSchema =z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), { // Validate ObjectId
    message: "Invalid customer ID",
  })
const statusSchema = z.boolean()

export const taskSchema = z.object({
  title : titleSchema,
   description: descriptionSchema,
   dueDate :dueDateSchema,
    customer :customerSchema,
    status : statusSchema,
})


