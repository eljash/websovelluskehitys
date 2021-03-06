var express = require('express');
var app = express();

/* GET METHOD */

app.use(express.static('files'));
app.get('/getmethod.html', function (req, res) {
    res.sendFile( __dirname + "/" + "getmethod.html" );
})

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

/* POST METHOD */

var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/postmethod.html', function (req, res) {
    res.sendFile( __dirname + "/" + "postmethod.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

/* FILE UPLOAD */

var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('files'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).any());

app.get('/fileupload.html', function (req, res) {
    res.sendFile( __dirname + "/" + "fileupload.html" );
})

app.post('/file_upload', function (req, res) {
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    var file = __dirname + "/" + req.files.file.name;

    fs.readFile( req.files.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if( err ) {
                console.log( err );
            } else {
                response = {
                    message:'File uploaded successfully',
                    filename:req.files.file.name
                };
            }

            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
})

/* SERVER */

var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies)
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})