/**
 * Created by admin on 2014/6/18.
 */
var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hello world');
}).listen(8124,'127.0.0.1');
console.log('server running')