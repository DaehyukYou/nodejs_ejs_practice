var express = require('express');
var server = express();

server.set('view engine', 'ejs'); // view engine ejs 사용하기
server.set('views', './');  // views 경로 바꾸기

server.get('/', function (req, res) {
    //res.send('send!');
    //res.json({message : 'json'});
    var a= 1;
    var b= 2;
    var c = a+b;
    res.render('./view.ejs', {type : 'calc', result : c}); // ejs 렌더링
});

server.get('/items/', function (req, res) {
    // items를 DB에서 Select OR whatever API 서버 통신 (whatever API = 내가 만든 api건 혹은 VAN사건 혹은 Google map api )
    // 위 두가지 중 뭐든 해서 값을 가져옴 (그 값은 JSON일 수도 있고, bytes array, xml일 수도 있고) <- 이건 API 문서에 정의되어 있겠지!!
    // result를 html 페이지에 렌더링
    
    res.render('./view.ejs', {type : 'item',  items : 'item', itemNo : ''}); // ejs 렌더링
});

server.get('/items/:itemNo', function (req, res) {
    // items를 DB에서 Select OR whatever API 서버 통신 (whatever API = 내가 만든 api건 혹은 VAN사건 혹은 Google map api )
    // 위 두가지 중 뭐든 해서 값을 가져옴 (그 값은 JSON일 수도 있고, bytes array, xml일 수도 있고) <- 이건 API 문서에 정의되어 있겠지!!
    // result를 html 페이지에 렌더링

    res.render('./view.ejs', {type : 'item',  items : 'item', itemNo : req.params.itemNo }); // ejs 렌더링
});

server.post('/items/:itemNo', function (req, res) {
    // items를 DB에서 Select OR whatever API 서버 통신 (whatever API = 내가 만든 api건 혹은 VAN사건 혹은 Google map api )
    // 위 두가지 중 뭐든 해서 값을 가져옴 (그 값은 JSON일 수도 있고, bytes array, xml일 수도 있고) <- 이건 API 문서에 정의되어 있겠지!!
    // result를 html 페이지에 렌더링

    res.render('./view.ejs', {type : 'item',  items : 'item', itemNo : req.params.itemNo }); // ejs 렌더링
});

server.put('/items/:itemNo', function (req, res) {
    // items를 DB에서 Select OR whatever API 서버 통신 (whatever API = 내가 만든 api건 혹은 VAN사건 혹은 Google map api )
    // 위 두가지 중 뭐든 해서 값을 가져옴 (그 값은 JSON일 수도 있고, bytes array, xml일 수도 있고) <- 이건 API 문서에 정의되어 있겠지!!
    // result를 html 페이지에 렌더링

    res.render('./view.ejs', {type : 'item',  items : 'item', itemNo : req.params.itemNo }); // ejs 렌더링
});




server.get('/user', function (req, res) {
    res.render('./view.ejs', {type : 'user', users : 'user'}); // ejs 렌더링
});

//var ip = '127.0.0.1';
var port = 3000;
server.listen(port, function () {
	console.log('Server Running at YDH (:' + port + ')');
});
