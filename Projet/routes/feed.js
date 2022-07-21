const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');

const router = express.Router();


// POST /feed/post
router.post(
    '/post',
    feedController.createPost
);

// GET /feed/post
router.get(
    '/posts',
    feedController.getPosts
);

module.exports = router;