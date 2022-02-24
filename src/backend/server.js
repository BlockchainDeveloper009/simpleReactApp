const express = require('express')
const app = express();
const cors = require('cors');
//node server.js
app.use(cors());
app.get('/', function(req, res){
    console.log("Got a GET request for the homepage");
    res.send('Hello World!');
})
app.get('1', function(req, res){
    console.log("Got a GET request for the homepage");
    res.send('re1');
})
app.get('/2', function(req, res){
    console.log("Got a GET request for the homepage");
    res.send('re2');
})
app.post("/upload", (req, res) => {

    // user modules such as express-fileupload, Multer, Bus

    setTimeout(() => {
        console.log('file  uploaded')
        return res.status(200).json({result: true, msg: 'file upload'}, 3000);

    });

    app.delete("/upload", (req, res) => {
        console.log('file deleted')
        return res.status(200).json({result: true, msg: 'file deleted'})
    });
});

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
 });

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
 });


var server = app.listen(8085, ()=> {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://localhost:"+port)
    console.log('host='+host)
    console.log('port='+port)
    //console.log('Server running on port 8080')
});
