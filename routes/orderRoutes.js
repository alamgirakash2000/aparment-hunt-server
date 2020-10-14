import express from "express";
import orderModel from "../models/orderModel.js";

const router = express.Router();

// Getting persons' orders
router.get("/:email", (req, res) => {
  const email = req.params.email;

  orderModel.find({ email: email }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Getting all orders
router.get("/", (req, res) => {
  const email = req.params.email;

  orderModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Posting a order
router.post("/", (req, res) => {
  const order = req.body;
  orderModel.create(order, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("Service created successfully");
    }
  });
});

// Updating a order
router.patch("/update", async (req, res) => {
  const id = req.query.id;
  const status = req.body.status;

  let order;
  try {
    order = await orderModel.findById(id);
  } catch (err) {
    res.status(500).send("No order found for this id");
  }

  order.status = status;

  try {
    await order.save();
    res.status(200).send("Status updated successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
