const express = require('express');
const router = express.Router();
const keyDBController = require('../../controllers/recommend/keyDBController');
const recController = require('../../controllers/recommend/recController');

router.post('/keyDB', keyDBController.keyDB);
router.put('/prefer', recController.prefer);

module.exports = router;