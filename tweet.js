var qs=require('querystring'),
    http=require('http');
var search=process.argv.slice(2).join(' ').trim();

if(!search.length){
   return  console.log('\n Usage:node tweets<search term>');
}
console.log('searching for :'+search);

http.request({
    host:'search.twitter.com',
    path:'/search.json?'+qs.stringify({q:search})
},function(res){
    var body='';
    res.setEncoding('utf-8');
    res.on('data',function(data){
        body+=data;
    });
    res.on('end',function(){
        var obj=JSON.parse(body);
        obj.array.forEach(tweet => {
            console.log(tweet.text);
            console.log(tweet.from_user);
            console.log('--');
        });
    })
}).end();

http.get({
    host:'search.twitter.com',
    path:'/search.json?'+qs.stringify({q:search})
},function(res){
    var body='';
    res.setEncoding('utf-8');
    res.on('data',function(data){
        body+=data;
    });
    res.on('end',function(){
        var obj=JSON.parse(body);
        obj.array.forEach(tweet => {
            console.log(tweet.text);
            console.log(tweet.from_user);
            console.log('--');
        });
    })
})