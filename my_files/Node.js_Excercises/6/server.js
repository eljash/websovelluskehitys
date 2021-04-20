var express = require('express');
var app = express();

const mysql = require('mysql');
const conn = mysql.createConnection({host: 'localhost', user: 'root', password:'rtse4u', database: 'example_db'});

var url = require('url');

conn.connect(function(err){
    if (err) throw err;
    console.log("Connected to MySQL");
})

var util = require('util'); // for async calls
// node native promisify
const query = util.promisify(conn.query).bind(conn); // is bind needed?


app.use(express.static('public'));

// parametrien kirjoitustapa selaimessa : http://localhost:8080/api/events?start=2021-01-01&end=2021-11-29
app.get("/api/events", function (req, res) {
    console.log("Get events from a certain period");
    var q = url.parse(req.url, true).query;
    var params = q.start + " " + q.end;
    var startDate = q.start;
    var endDate = q.end;
    var string;

    var sql = "SELECT event_date.Date, event.Name, event.Type, Location.Location_name"
        + " FROM event_date, event, location"
        + " WHERE event_date.Event_id = event.Event_id and event.Location_Location_id = Location.Location_id"
        + " and event_date.Date >= ? and event_date.Date <= ?"
        + " GROUP BY Name"
        + " ORDER BY event_date.Date";

    (async () => { // IIFE (Immediately Invoked Function Expression)
        try {
            const rows = await query(sql,[startDate, endDate]);
            string = JSON.stringify(rows);
            console.log(string);
            res.send(string);
        }
        catch (err) {
            console.log("Database error!"+ err);
        }
        finally {
            //conn.end();
        }
    })()
});

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