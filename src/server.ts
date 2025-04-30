import express from "express"; 
import colors from "colors";
import router from "./router.js";
import db from "./config/db.js";

async function connectDB() {
  try {
    await db.authenticate()
    db.sync({ force: false });
    console.log(colors.bgGreen.bold('Conexión exitosa a la BD'));
  } catch (error) {
    // console.log( error );
    console.log( colors.red.bold('Hubo un error al conecarsse a la BD') );
  }
}
connectDB();

const server = express();

server.use('/api/products', router);


export default server;  