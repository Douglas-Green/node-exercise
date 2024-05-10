import express from "express";
import db from "../mockdb/index.js"; 

const router = express.Router();

// Function to handle fetching user data
async function fetchUserData(req, res, next) {
    try {
        const { id } = req.params;
        const data = id ? await db.getOne(id) : await db.getAll();
        res.json(data);
    } catch (error) {
        next(error);
    }
}

// Function to handle creating a new user
async function createUser(req, res, next) {
    try {
        const newUser = req.body;
        const data = await db.add(newUser);
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}

// Function to handle updating an existing user
async function updateUser(req, res, next) {
    try {
        const { id } = req.params;
        const updateUser = req.body;
        const data = await db.update(id, updateUser);
        res.json(data);
    } catch (error) {
        next(error);
    }
}

// Function to handle deleting a user
async function deleteUser(req, res, next) {
    try {
        const { id } = req.params;
        const data = await db.remove(id);
        res.json(data);
    } catch (error) {
        next(error);
    }
}

// Route definitions
router.get("/:id?", fetchUserData);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;