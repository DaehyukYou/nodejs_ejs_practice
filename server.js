var express = require('express');
var server = express();

server.set('view engine', 'ejs'); // view engine ejs 사용하기
server.set('views', './');  // views 경로 바꾸기

server.get('/', function (req, res) {
    res.render('./view.ejs', {type : 'all', data : ['hammer', 'warrior'], p : ''}); // ejs 렌더링
});

server.get('/items/', function (req, res) {
    res.render('./view.ejs', {type : 'items',  data : 'hammer', p : ''}); // ejs 렌더링
});

server.get('/items/:itemNo', function (req, res) {
    res.render('./view.ejs', {type : 'items',  data : 'hammer', p : req.params.itemNo }); // ejs 렌더링
});

server.get('/users', function (req, res) {
    res.render('./view.ejs', {type : 'users', data : 'warrior', p : ''}); // ejs 렌더링
});

server.get('/users/:userNo', function (req, res) {
    res.render('./view.ejs', {type : 'users',  data : 'warrior', p : req.params.userNo }); // ejs 렌더링
});

//var ip = '127.0.0.1';
var port = 3000;
server.listen(port, function () {
	console.log('Server Running at YDH (:' + port + ')');
});
