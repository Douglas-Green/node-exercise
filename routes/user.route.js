/** @format */

import express from "express";
import db from "../mockdb"; 

const router = express.Router();

// GET user(s)
router.get("/:id?", async (req, res, next) => {
  try {
    const {id} = req.params;
    let data;
    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// POST a new user
router.post("/", async (req, res, next) => {
  try {
    const newUser = req.body;
    const data = await db.add(newUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// PUT update user
router.put("/:id", async (req, res, next) => {
  try {
    const {id} = req.params; // Destructure ID from the URL parameters
    const updateUser = req.body; // The updated user data from the request body
    const data = await db.update(id, updateUser); // update the user in the database (./mockdb/index.js)
    res.json(data); // Send the updated user data as a JSON response
  } catch (error) {
    next(error); // Passes errors to the error handling middleware
  }
});

// DELETE a user
router.delete("/:id", async (req, res, next) => {
  try {
    const {id} = req.params; // again destructure the ID from the URL parameters
    const data = await db.remove(id); // Remove the user from the database
    res.json(data); // Send the result as a JSON response
  } catch (error) {
    next(error); // Again pass errors to the error handling middleware
  }
});

export default router;
