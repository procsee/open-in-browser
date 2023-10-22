const express = require('express');
const { redir } = require('../controllers/redirController');
const router = express.Router();

router.get('/', redir);

module.exports = router;