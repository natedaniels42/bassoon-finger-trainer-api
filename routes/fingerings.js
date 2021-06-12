const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.fingerings.index);
router.get('/random', ctrl.fingerings.getRandom);
router.get('/:id', ctrl.fingerings.show);
router.get('/name/:name', ctrl.fingerings.getByName);

module.exports = router;