/* eslint-disable camelcase */
const express = require("express");
const authMiddleware = require("../configs/auth-middleware");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      res.status(202).json({});
    } catch (err) {
      res.status(500).json({ message: "server error" });
    }
  });
  

router.put("/", authMiddleware, async (req, res) => {
  try {
    res.status(202).json({ message: "accepted" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});


router.delete("/", authMiddleware, async (req, res) => {
  try {
    res.status(202).json({ message: "accepted" });
  } catch (error) {}
});

router.post("/", authMiddleware, async (req, res) => {
  try {
    res.status(202).json({ message: "Setarile SmartBill au fost salvate!" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
