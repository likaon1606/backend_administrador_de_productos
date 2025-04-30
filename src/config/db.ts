import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Simular __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno
dotenv.config();


import Product from '../models/Product.model.js'; 

// Instancia de Sequelize
const db = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql', 
  dialectOptions: {
    ssl: { require: false },
  },
  models: [Product],
});

export default db;
