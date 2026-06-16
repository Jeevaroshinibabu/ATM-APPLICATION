const express = require("express");
const router = express.Router();

const { signup, login,
    checkBalance, deposit, withdraw } = require("../controllers/atmController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/balance/:accountNumber", checkBalance);
router.put("/deposit", deposit);
router.put("/withdraw", withdraw);

router.get("/", (req, res) => 
    res.json({ message: "Welcome to the ATM API" }));
module.exports = router;