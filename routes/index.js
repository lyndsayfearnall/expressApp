var express = require('express');
var mysql = require('mysql');
var connect = require('../utils/sqlConnect');
var router = express.Router();

const templateTypes = [
  {name: "Jade", usefullness : "sucky"},
  {name: "EJS", usefullness : "a little better"},
  {name: "Handlebars", usefullness: "awesome"}
]

/* GET home page. */
router.get('/', function(req, res, next) {

  connect.query('SELECT * FROM mainmodel', (err, result, fields) => {
    if (err) {
      throw err; console.log(err);
    } else {
    console.log(result);
    }
  });

  res.render('home', {
    title: 'Express',
     message : "I like handlebars" ,
     templates: templateTypes,
     anothermessage : "HELLOOOOO"
   });
});

module.exports = router;
