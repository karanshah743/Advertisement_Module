var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('adds');
  // res.render('regularadd', { title: 'Add Advertisement' });
  res.render('add');
});

module.exports = router;
