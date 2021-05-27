const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.fingerings.index);

module.exports = router;