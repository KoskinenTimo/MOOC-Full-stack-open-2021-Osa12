const express = require('express');
const router = express.Router();
const redis = require('../redis')

/* GET todos listing. */
router.get('/', async (_, res) => {
  const postsData = await redis.getAsync('posts')
  let posts = 0
  if (postsData) {
    posts = parseInt(postsData)
  }
  res.send({ "added_todos": posts })
});

module.exports = router;