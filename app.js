var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var MongoClient = require('mongodb').MongoClient;
//确定数据库名称vuetest
var mongoUrl = 'mongodb://localhost:27017/mydb';
var _db;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));
if (process.env.NODE_ENV === 'production') {
  mongoUrl = process.env.MONGOLAB_URI;
}
MongoClient.connect(mongoUrl, function (err, db) {
  if(err) {
    console.error(err);
    return;
  }
  console.log('mongodb have connected your project');
  _db = db.db("mydb");
  //监听端口8080
  app.listen(8080, function () {
    console.log('server is running at 8080');
  });
});

//增加分享的内容
app.post('/createShare', function(req, res, next) {
var request = req.body;
var collection = _db.collection('share');
if(!request.name || !request.teacher || !request.introduction || !request.shopUrl || !request.pictureUrl) {
  res.send({errcode:-1,errmsg:"参数不完整"});
  return;
}
collection.insert({name: request.name, teacher: request.teacher,introduction: request.introduction,shopUrl: request.shopUrl,pictureUrl: request.pictureUrl,}, function (err, ret) {
  if(err) {
    console.error(err);
    res.status(500).end();
  } else {
    res.send({errcode:0,errmsg:"ok"});
  }
});
});
//获取列表
app.get('/share-list', function(req, res, next) {
  var collection = _db.collection('share');
  collection.find({}).toArray(function (err, ret) {
    if(err) {
      console.error(err);
      return;
    }
    res.json(ret);
  });
});
