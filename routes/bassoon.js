const router = require('express').Router();
const ctrl = require('../controllers');

router.post('/', ctrl.bassoon.create);
router.get('/:bottom/:top', ctrl.bassoon.findAnswers);

module.exports = router;