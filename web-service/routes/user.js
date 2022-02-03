const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const users = await req.context.models.users.find();
    return res.send(users);
  } catch (e) {
    if (res.status(404)) {
      return res.status(404).json({
        message: "USUARIO NO ENCONTRADO",
      });
    } else if (res.status(400)) {
      return res.status(400).json({
        message: "ERROR DE PETICION",
      });
    } else if (res.status(403)) {
      return res.status(403).json({
        message: "ACCESO NO PERMITIDO",
      });
    } else if (res.status(408)) {
      return res.status(408).json({
        message: "TIMED OUT",
      });
    } else {
      return res.status(500).json({
        message: "ERROR DESCONOCIDO",
      });
    }
  }
});

// Listado de usuarios
router.get("/:userId", async (req, res) => {
  try {
    const user = await req.context.models.users.findById(req.params.userId);
    res.send(user);
  } catch (e) {
    if (res.status(404)) {
      return res.status(404).json({
        message: "USUARIO NO ENCONTRADO",
      });
    } else if (res.status(400)) {
      return res.status(400).json({
        message: "ERROR DE PETICION",
      });
    } else if (res.status(403)) {
      return res.status(403).json({
        message: "ACCESO NO PERMITIDO",
      });
    } else if (res.status(408)) {
      return res.status(408).json({
        message: "TIMED OUT",
      });
    } else {
      return res.status(500).json({
        message: "ERROR DESCONOCIDO",
      });
    }
  }
});

// Crear usuario
router.post("/", async (req, res) => {
  try {
    const user = await req.context.models.users.create({
      username: req.body.username,
    });
    return res.send(user);
  } catch (e) {
    if (res.status(404)) {
      return res.status(404).json({
        message: "USUARIO NO ENCONTRADO",
      });
    } else if (res.status(400)) {
      return res.status(400).json({
        message: "ERROR DE PETICION",
      });
    } else if (res.status(403)) {
      return res.status(403).json({
        message: "ACCESO NO PERMITIDO",
      });
    } else if (res.status(408)) {
      return res.status(408).json({
        message: "TIMED OUT",
      });
    } else {
      return res.status(500).json({
        message: "ERROR DESCONOCIDO",
      });
    }
  }
});

// Actualizar usuario
router.put("/:userId", async (req, res) => {
  try {
    const user = await req.context.models.users.findById(req.params.userId);
    if (user) {
      user.username = req.body.username;
      await user.save();
    }
    return res.send(user);
  } catch (e) {
    if (res.status(404)) {
      return res.status(404).json({
        message: "USUARIO NO ENCONTRADO",
      });
    } else if (res.status(400)) {
      return res.status(400).json({
        message: "ERROR DE PETICION",
      });
    } else if (res.status(403)) {
      return res.status(403).json({
        message: "ACCESO NO PERMITIDO",
      });
    } else if (res.status(408)) {
      return res.status(408).json({
        message: "TIMED OUT",
      });
    } else {
      return res.status(500).json({
        message: "ERROR DESCONOCIDO",
      });
    }
  }
});

// Eliminar usuario
router.delete("/:userId", async (req, res) => {
  try {
    const user = await req.context.models.users.findById(req.params.userId);
    if (user) {
      await user.remove();
    }
    return res.send(user);
  } catch (e) {
    if (res.status(404)) {
      return res.status(404).json({
        message: "USUARIO NO ENCONTRADO",
      });
    } else if (res.status(400)) {
      return res.status(400).json({
        message: "ERROR DE PETICION",
      });
    } else if (res.status(403)) {
      return res.status(403).json({
        message: "ACCESO NO PERMITIDO",
      });
    } else if (res.status(408)) {
      return res.status(408).json({
        message: "TIMED OUT",
      });
    } else {
      return res.status(500).json({
        message: "ERROR DESCONOCIDO",
      });
    }
  }
});

module.exports = router;