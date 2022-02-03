const uuid = require("uuid");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const message = await req.context.models.messages.find();
    return res.send(message);
  } catch (err) {
    return res.status(500).json({
      code: "500",
      message: "INTERNAL SERVER ERROR",
      data: err,
    });
  }
});

router.get("/:messageId", async (req, res) => {
  try {
    const message = await req.context.models.messages.findById(
      req.params.messageId
    );
    res.send(message);
  } catch (err) {
    return res.status(500).json({
      code: "500",
      message: "INTERNAL SERVER ERROR",
      data: err,
    });
  }
});

router.post("/", async (req, res) => {
  const message = await req.context.models.messages.create({
    text: req.body.text,
    user: req.context.me.id,
  });
  return res.send(message);

    /*
    const id = uuid.v4()
    const message = {
        id,
        text: req.body.text,
        userId: req.context.me.id
    }
    req.context.models.messages[id] = message
    return res.send(message)
    */
})

router.put("/:messageId", async (req, res) => {
    try {
      const message = await req.context.models.messages.update(
        req.params.messageId,
        {
          text: req.body.text,
        }
      );
      res.send(message);
    } catch (err) {
      return res.status(500).json({
        code: "500",
        message: "INTERNAL SERVER ERROR",
        data: err,
      });
    }
  });
  
  router.delete("/:messageId", async (req, res) => {
    const message = await req.context.models.messages.findById(
      req.params.messageId
    );
    if (message) {
      await message.remove();
    }
    return res.send(message);


    /*
    const {
        [req.params.messageId]: message,
        ...otherMessages
    } = req.context.models.messages
    req.context.models.messages = otherMessages
    return res.send(message)
    */

});

module.exports = router