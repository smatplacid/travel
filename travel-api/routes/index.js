var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });

  // res.render('index', { 
  //   title: 'Express',
  //   buttons: [
  //     { text: 'API', href: '/testAPI' },
  //     { text: 'Translate', href: '/translate' },
  //     { text: 'Users', href: '/users' },
  //     { text: 'Home', href: '/' },
  //   ] 
  // });
});

module.exports = router;