//http module is used to make http requests
const fs = require('fs');
const http = require('http');


//create a server
//function call back
const server  = http.createServer((req, res) => {
    console.log(req);
    const {url , method } = req;
    
    //same
    //const url = req.url;
    //const method = req.method;

    //res.writeHead(200,{'Content-type':'text/plain'});
    //res.end('Hello World \n');
    
    if (url === '/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write(`<body>
        <form action="/message" method="post">
        <input type="text" name="message">
        <button type="submit">Send</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        // On récupère les données de la requete
        req
          .on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
          });
          req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync("message.txt", message);
            //console.log(parsedBody);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
          });
          req.on("error", (err) => {
            console.log(err);
          });
      }
})
    
//ecoute le port 3000
server.listen(3000);