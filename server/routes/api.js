var database = require('./database.js')
var db = database.db



module.exports = function(router){
    router.post('/customers', function(req, res) {
        database.addUser(
		req.body.lastname,
		req.body.firstname,
        req.body.phone
        );
    });

    router.get('/customers', function (req, res) {
        database.showUser(function (err, data) {
            if (err) {
                throw err;
            } else {
                res.json(data);
            }
        });
    });


    router.delete('/customers', function(req, res){
        console.log("delet all");
        database.deleteAll(function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });

    router.get('/customers/:id', function(req, res){
        console.log("getitme");
        database.findUser(req.params.id,function(err,data){
            res.json(data);
        });
    });

    router.delete('/customers/:id', function(req, res){
        database.deleteUser(req.params.lastname,function(err){
            res.json({result: err ? 'error' : 'ok'})
        });
    });


}

