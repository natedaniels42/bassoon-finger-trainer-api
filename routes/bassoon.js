const router = require('express').Router();
const ctrl = require('../controllers');

router.post('/', ctrl.bassoon.create);

module.exports = router;