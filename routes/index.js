var express = require('express');
var router = express.Router();
var nhanvien=require('../models/nhanvien.js')
/* GET home page. */
// localhost:3000/
// 127.0.0.1:3000/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//localhost:3000/them
router.get('/them',function(req, res, next){
  res.render('themnv.ejs');
});
router.post('/them', function(req, res ,next){
  var nv = new nhanvien({
    name:req.body.txtTen,
    age:req.body.txtTuoi
  })
  nv.save(error => res.redirect('/them'))
});

module.exports = router;
