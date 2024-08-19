const Registro = require("../models/registro");

exports.list = async (req, res) => {
  const registros = await Registro.findAll();
  res.render("index", { registros });
};

exports.newForm = (req, res) => {
  res.render("newRegistro");
};

exports.create = async (req, res) => {
  const { fecha, hora, telefono, subdireccion, observaciones, ext } = req.body;
  await Registro.create({
    fecha,
    hora,
    telefono,
    subdireccion,
    observaciones,
    ext,
  });
  res.redirect("/");
};
