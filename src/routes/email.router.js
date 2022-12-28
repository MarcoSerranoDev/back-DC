const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json("Funciona bien");
});

module.exports = router;
