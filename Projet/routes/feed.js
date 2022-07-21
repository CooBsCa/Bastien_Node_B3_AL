import express from "express";
import feedController from "../controllers/feed.js";

const router = express.Router();


// POST /feed/post
router.post(
    '/post',
    feedController.createCity
);

// GET /feed/post
router.get(
    '/get',
    feedController.getCity
);


export default router;