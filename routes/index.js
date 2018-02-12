var express = require('express');
var router = express.Router();

const templateTypes = [
  {name: "Jade", usefullness : "sucky"},
  {name: "EJS", usefullness : "a little better"},
  {name: "Handlebars", usefullness: "awesome"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
     message : "EJS is cool" ,
     templates: templateTypes
   });
});

module.exports = router;
