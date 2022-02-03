const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const users = await req.context.models.users.find();
    return res.send(users);
  } catch (e) {
    if (res.status(404)) {
      return res.status(404).json({
        message: "USER NOT FOUND",
      });
    } else if (res.status(400)) {
      return res.status(400).json({
        message: "BAD REQUEST",
      });
    } else if (res.status(403)) {
      return res.status(403).json({
        message: "FORBIDDEN ACCESS",
      });
    } else if (res.status(408)) {
      return res.status(408).json({
        message: "TIMED OUT",
      });
    } else {
      return res.status(500).json({
        message: "INTERNAL SERVER ERROR",
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
        message: "USER NOT FOUND",
      });
    } else if (res.status(400)) {
      return res.status(400).json({
        message: "BAD REQUEST",
      });
    } else if (res.status(403)) {
      return res.status(403).json({
        message: "FORBIDDEN ACCESS",
      });
    } else if (res.status(408)) {
      return res.status(408).json({
        message: "TIMED OUT",
      });
    } else {
      return res.status(500).json({
        message: "INTERNAL SERVER ERROR",
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
        message: "USER NOT FOUND",
      });
    } else if (res.status(400)) {
      return res.status(400).json({
        message: "BAD REQUEST",
      });
    } else if (res.status(403)) {
      return res.status(403).json({
        message: "FORBIDDEN ACCESS",
      });
    } else if (res.status(408)) {
      return res.status(408).json({
        message: "TIMED OUT",
      });
    } else {
      return res.status(500).json({
        message: "INTERNAL SERVER ERROR",
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
        message: "USER NOT FOUND",
      });
    } else if (res.status(400)) {
      return res.status(400).json({
        message: "BAD REQUEST",
      });
    } else if (res.status(403)) {
      return res.status(403).json({
        message: "FORBIDDEN ACCESS",
      });
    } else if (res.status(408)) {
      return res.status(408).json({
        message: "TIMED OUT",
      });
    } else {
      return res.status(500).json({
        message: "INTERNAL SERVER ERROR",
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
        message: "USER NOT FOUND",
      });
    } else if (res.status(400)) {
      return res.status(400).json({
        message: "BAD REQUEST",
      });
    } else if (res.status(403)) {
      return res.status(403).json({
        message: "FORBIDDEN ACCESS",
      });
    } else if (res.status(408)) {
      return res.status(408).json({
        message: "TIMED OUT",
      });
    } else {
      return res.status(500).json({
        message: "INTERNAL SERVER ERROR",
      });
    }
  }
});

module.exports = router;