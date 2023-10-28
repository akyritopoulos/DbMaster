const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
