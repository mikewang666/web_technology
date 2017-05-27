var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('my.db');
module.exports.db = db;



function addUser(lastname, firstname, phone) {
	var statement = db.prepare("INSERT OR IGNORE INTO users("+
		"lastname,firstname,phone)"+
		"VALUES (?,?,?)");
	statement.run(lastname,firstname,phone);
	statement.finalize();
	return true;
}
module.exports.addUser = addUser;



function showUser(callback){
	 db.all("SELECT * FROM users", callback);
}
module.exports.showUser = showUser;


function deleteAll(callback){
	db.run("DELETE FROM users",callback);
}
module.exports.deleteAll=deleteAll;

function findUser(ts,callback){
	var didOne=false;
	db.each("SELECT * FROM notes WHERE ts = ?",
        [ts], function(err, row){
            if (err){
                callback(err, null);
            } else {
                if (!didOne){
                    callback(null, row);
                    didOne = true;
					//make sure just run the function one time
                }
            }
		});
}
module.exports.findUser=findUser;

function deleteUser(ts,callback){
	db.run("DELETE FROM users WHERE lastname = ?;",[ts],function(err){
            if (err){
                callback(err);
            } else {
                callback(null);
            }
        });
}

module.exports.deleteUser = deleteUser;
