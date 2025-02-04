const http = require('http');
const fs = require('fs');
const url = require('url');

function myHandler(req, res) {
    if (req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} : ${req.method} ${req.url} new request recived! \n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("./log.txt", log, (err, data) => {
        switch(myUrl.pathname) {
            case "/" :
                if (req.method === "GET") {
                    res.end("home page");
                }
                break;
            case "/about" :
                res.end("i am aryan kapoor");
                break;
            case "/search" :
                res.end(`you are ${myUrl.query.myname}`);
                break;
            case "/signup" :
                if (req.method === "GET") {
                    res.end(`you are on the sign up page`);
                } else if (req.method === "POST") {
                    res.end(`success`); //user tried to sign in
                }
                break;
            default :
                res.end("404 error");
        }
    });
}

const server = http.createServer(myHandler) //express replaces this myHandler funtion 

server.listen(8000, () => {
    console.log('server started');
})