var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "client",
    password: "client",
    database: "example_db"
})

con.connect(function(err){
    if (err) throw err;
    con.query("SELECT * FROM event", function(err, result, fields){
        if (err) throw err;
        console.log(result);
    })
})

var q = url.parse(req.url, true).query;
var startDate = q.start;
var endDate = q.end;
var sql = "SELECT event_date.Date, event.Name, event.Type, event.Time, Location.Location_place_name"
+ " FROM event_date, event, location"
+ " WHERE event_date.Event_Event_id = event.Event_id and event.Location_Location_id = Location.Location_id"
+ " and event_date.Date >= ? and event_date.Date <= ?"
+ " GROUP BY Name"
+ " ORDER BY event_date.Date";

app.get("/allevents", function (req, res) {
    console.log("Get all events");
    var q = url.parse(req.url, true).query;
    var params = q.start + " " + q.end;
    var startDate = q.start;
    var endDate = q.end;
    var string;
    // res.send("Getting events: "+params);

    var sql = "SELECT * FROM event";

    (async () => { // IIFE (Immediately Invoked Function Expression)
        try {
            const rows = await query(sql);
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

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})