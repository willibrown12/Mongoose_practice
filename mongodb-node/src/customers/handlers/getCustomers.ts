import { customerModel } from "../model";


export default async function getCustomers() {
    try {
        
    } catch (error) {
        
    }
    const result = await customerModel.find()
    return result;
}