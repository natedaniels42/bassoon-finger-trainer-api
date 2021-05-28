const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.fingerings.index);
router.get('/:id', ctrl.fingerings.show);

module.exports = router;