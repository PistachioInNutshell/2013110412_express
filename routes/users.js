var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('hello kitty');
  res.status(200).json(
    {fullname: 'Kittinan Kampusa'})
});

router.get('/bio', function(req, res, next) {
  //res.send('hello kitty');
  res.status(200).json(
    {fullname : 'Kittinan Kampusa',
    nickname  : 'Nun',
    hobby     : 'Gaming',
    gitusername : 'PistachioInNutshell'})
});

module.exports = router;
