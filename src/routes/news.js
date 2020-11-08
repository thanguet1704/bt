const express = require('express');
const router = express.Router();

const newsControler = require('../app/controllers/NewController');


router.use('/:slug', newsControler.show);
router.use('/', newsControler.index);

module.exports = router;
