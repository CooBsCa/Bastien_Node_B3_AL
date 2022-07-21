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

// GET /feed/upload
router.post(
    '/upload',
    feedController.imageUpload
);


export default router;