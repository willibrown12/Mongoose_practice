import express, { NextFunction, Request, Response } from "express"
import getCustomers from "./handlers/getCustomers"


const router = express.Router()
router.get("/", async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const data = await getCustomers()
    
            return res.json({ message: "Order Max card get it after an year!!", data })
       
    } catch (error) {
        return next(error)
    }
})


export { router };