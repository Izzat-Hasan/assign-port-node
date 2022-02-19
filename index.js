var http = require('http');
var url = require('url');
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


const server = http.createServer((request, response) => {
    // Write the request to the log. 
    console.log(request);






});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
