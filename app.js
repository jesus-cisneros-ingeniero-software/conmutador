const express = require("express");
const bodyParser = require("body-parser");
const registroRoutes = require("./routes/registro");
const sequelize = require("./config/database");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", registroRoutes);

sequelize.sync().then(() => {
  app.listen(3100, () => {
    console.log("Servidor escuchando en el puerto 3100");
  });
});
