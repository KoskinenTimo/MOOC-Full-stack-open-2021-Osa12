const express = require('express');
const router = express.Router();
const redis = require('../redis')
const configs = require('../util/config')

let visits = 0
/* GET index data. */


router.get('/', async (req, res) => {
  let visitsData = await redis.getAsync('visits')  
  if (!visitsData) {
    await redis.setAsync('visits', 1)
    visits = 1
  } else {
    let visitsNumber = parseInt(visitsData);
    visitsNumber++
    await redis.setAsync('visits', visitsNumber)
    visits = visitsNumber
  }

  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
