import connectDB from '../database/db.js';
import {seedProduct} from './Product.js';

const seedData = async() =>{
  try{
    await connectDB();
    console.log('Seed starting wait');
    await seedProduct();
    console.log('Seed completed');
  }catch(error){
    console.log(error);
  }
};

seedData();