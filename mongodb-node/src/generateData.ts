import mongoose from 'mongoose';
import { customerModel } from './customers/model';
import { taskModel } from './tasks/model';

async function generateData() {
  try {
    await mongoose.connect('mongodb://localhost:27017/customers');
  
    const customers = await customerModel.insertMany([
      { name: 'John Doe', job: 'Developer', phone: 1234567890, email: 'john@example.com' },
      { name: 'Jane Smith', job: 'Designer', phone: 9876543210, email: 'jane@example.com' },
    ]);

    
    await taskModel.insertMany([
      {
        title: 'Task 1',
        description: 'Description for Task 1',
        dueDate: new Date(),
        customer: customers[0]._id,
        status: true,
      },
      {
        title: 'Task 2', 
        description: 'Description for Task 2',
        dueDate: new Date(),
        customer: customers[1]._id, 
        status: false, 
      },
    ]);

    console.log('Sample data generated');
  } catch (error) {
    console.error('Error generating data:', error);
  } finally {
    mongoose.disconnect();
  }
}

export { generateData };
