import express from "express"; 
import router from "./router.js";

const server = express();

server.use('/api/products', router);


export default server;  