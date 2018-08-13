// var http=require('http');
// var qs=require('querystring');
// http.createServer(function(req,res){
    
//     if('/'==req.url){
//         res.writeHead(200,{
//             'Content-type':'text/html'
//         })
//         res.end(['<form method="POST" action="/url">',
//                  '<h1>My form</h1>',
//                  '<fieldset>',
//                  '<label>Personal Information</label>',
//                  '<p>What is your name?</p>',
//                  '<input type="text" name="name">',
//                  '<p><button>Submit</button></p>'].join(' '));
//     }else if('/url'==req.url&&'POST'==req.method){
//         var body='';
//         req.on('data',function(chunk){
//             body+=chunk;
//         });
//         req.on('end',function(){
//             res.writeHead(200,{'Content-type':'text/html'});
//             // res.end('<p> Content-type:'+req.headers['content-type']+'</p>'+
//             //         '<p> data :'+body+'</p>');
//             res.end('You name is'+body);
//         });
        
//     }else{
//         res.writeHead(404);
//         res.end('Not Found');
//     }
    
// }).listen(3000);

// require('http').createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/plain'})//响应体编码内容
//     res.end('hello world'); 
// }).listen(3000);

require('http').createServer(function(req,res){
    var body='';
    req.on('data',function(data){
        body+=data;
    });
    req.on('end',function(){
        res.writeHead(200,{'Content-type':'text/plain'});
        res.end('Done');
        console.log(require('querystring').parse(body).name);
    });
}).listen(3000);

