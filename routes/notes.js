const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.notes.index);
router.get('/:id', ctrl.notes.show);

module.exports = router;