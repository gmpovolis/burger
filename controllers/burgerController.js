const router = require("express").Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data){
        const burgObj = {
            burgers: data
        };
        console.log(burgObj);
        res.render("index", burgObj);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "burger_name", "devour"
    ], [
        req.body.burger_name, req.body.devour
    ], function(data){
        res.json({ id: data.insertId })
    })
})

router.put("/api/burgers/:id", function(req, res) {
    var burgerId = "id= " + req.params.id;
    console.log("burgerId", burgerId)

    burger.update({
        devour: req.body.devour
    }, burgerId, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var burgerId = "id= " + req.params.id;
    burger.delete(burgerId, function(result){
        if(result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;