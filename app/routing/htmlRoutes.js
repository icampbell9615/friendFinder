//Getting the right file path for html
var path = require('path');

//Handle the HTML pages

module.exports = function (app) {
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, + '/../public/survey.html'));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, + '/../public/home.html'));
    });
};