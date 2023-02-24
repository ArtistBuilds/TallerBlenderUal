var express = require('express');
const { client, dbName, MongoClient, ObjectId, url, collection } = require('../db/mongoDB');
const { search, searchOne, description, descriptionOne, random, randomOne, title, titleOne, descriptionz, descriptionzOne } = require ('../controllers/methods')
var router = express.Router();



// /* GET home page. */
router.get('/search', function (req, res, next) {
  res.render('index', { title: 'CodeGen' });
  search();

});

// Conseguir un solo título 

router.get('/search-one', (req, res, next) =>{
  res.render('index', {title: 'xd'});
  searchOne();

  });

router.get('/description', function(req, res, next) {
  res.render('index');
  description();

});

router.get('/description-one', function(req, res, next) {
  res.render('index');
  descriptionOne();

});

router.get('/random', function(req, res, next) {
  res.render('index');
  random();

});

router.get('/random-one', function(req, res, next) {
  res.render('index');
  randomOne();

});

router.get('/title', function(req, res, next) {
  res.render('userSearch');
  title();

});

router.get('/title-one', function(req, res, next) {
  res.render('userSearch');
  titleOne();

});

router.get('/description', function(req, res, next) {
  res.render('userSearch');
  descriptionz();

});

router.get('/description-one', function(req, res, next) {
  res.render('userSearch');
  descriptionzOne();

});

module.exports = router;