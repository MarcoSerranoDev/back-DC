const { Router } = require("express");
const router = Router();

const ctrEmail = require("../controllers/email.controller");

router.post("/send-me", ctrEmail.sentMeMail);

router.get("/", (req, res) => {
  res.json("Funciona bien");
});

module.exports = router;
