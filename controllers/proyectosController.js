exports.proyectosHome = (req, res) => {
  res.render("index", {
    nombrePagina: "Proyectos",
  });
};

exports.formularioProyecto = (req, res) => {
  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo Proyecto",
  });
};

exports.nuevoProyecto = (req, res) => {
  // Enviar a consola lo que introduzca el usuario
  // validar que tengamos algo en el input

  const { nombre } = req.body;
  let errores = [];

  if (!nombre) {
    errores.push({ texto: "Agrega un nombre al Proyecto" });
  }
  //   si hay errores
  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo proyecto",
      errores,
    });
  } else {
    //   no hay errores asi que debemos insertar en BD
  }
};
