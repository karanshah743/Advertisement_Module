var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Advertisement Module' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Add Advertisement' });
});
 

module.exports = router;
