const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.notes.index);

module.exports = router;