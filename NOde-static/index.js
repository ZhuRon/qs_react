const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const mime = require('mime');

const server = http.createServer();
server.on('request',request.bind(this));

function request (req,res){
    const { pathname } = url.parse(req.url)
    //req res
    console.log(url.parse(req.url));
    let filepath = path.join(config.root,pathname);
    if(pathname === '/'){
        const rootPath = path.join(config.root,'index.html')
        res.setHeader('Content-Type',)
        return fs.createReadStream(rootPath).pipe(res)
    }
}
server.listen(config.port,()=>{
    console.log(`静态文件服务器启动成功，访问localhost:${config.port}`)
})