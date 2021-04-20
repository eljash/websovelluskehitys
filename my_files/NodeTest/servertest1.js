const mysql = require('mysql');
const util = require("util");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rtse4u",
    database: "example_db"
});

const query = util.promisify(con.query).bind(con);

(async () => {
    try {
        const rows = await query('select count(*) as count from event');
        console.log(rows);
    } finally {
        con.end();
    }
})();

/*
con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM event", function (err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});
 */