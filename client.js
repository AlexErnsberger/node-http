// require('http').request({
//     host:'127.0.0.1',
//     port:3000,
//     url:'/',
//     method:'Get'
// },function(res){
//     var body='';
//     res.setEncoding('utf-8');
//     res.on('data',function(data){
//         body+=data;
//     })
//     res.on('end',function(){
//         console.log(body);
//     })
// }).end();
function send(theName){   
    require('http').request({
        host:'127.0.0.1',
        port:3000,
        url:'/',
        method:'POST'
    },function(res){
        res.setEncoding('utf-8');
        res.on('end',function(){
            console.log('request complete');
            process.stdout.write('\n you name:');
        })
    }).end(require('querystring').stringify({name :theName}));
}

process.stdout.write('\n you name:')
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data',function(name){
    send(name.replace('\n',''));
})
