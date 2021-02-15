// const fs = require('fs');
// const userName = "ozgur";

// fs.writeFile("user-data.txt", 'Name: ' + userName, (err) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Wrote file');

// })

const http = require('http');

const server = http.createServer = http.createServer((req, res) =>{
    console.log('INCOMING REQUEST');
    console.log(req.method, req.url);

    res.end('Success!')
    
});
 
server.listen(5000);