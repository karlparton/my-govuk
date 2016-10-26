var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

<<<<<<< HEAD
// router.get('/tutorials/tutorial-1/question-page-2', function (req, res) {

//   res.render('/tutorials/tutorial-1/question-page-2', { 'name' : 'Foo' });

// });

module.exports = router;
=======
module.exports = router
>>>>>>> fb45d4fe0a6b972ec5d2d027ea5828f59d853324
