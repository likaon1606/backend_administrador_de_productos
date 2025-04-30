import server from "./server.js";
import colors from "colors";

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(colors.bgMagenta.bold(`REST API en el puerto ${PORT}`));
});
