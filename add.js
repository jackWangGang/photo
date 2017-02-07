/**
 * Created by Administrator on 2017/1/9.
 */
process.on('message', function(m) {
    console.log('CHILD got message:', m);
});

process.send({a:1})
//var fs = require("fs");
//
//fs.readFile("package.json",(err,data)=>{
//    process.send({ foo: data.toString() });
//});
