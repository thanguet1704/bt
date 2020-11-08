const express = require('express');
const router = express.Router();

const siteControler = require('../app/controllers/SiteController');

router.use('/search', siteControler.search);
router.use('/', siteControler.home);

module.exports = router;
