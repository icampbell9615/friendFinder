var friendsData = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userScores = userData.scores;
        var userName = userData.name;
        var userPhoto = userData.photo;

        var totalDifference = 0;

        for (var i = 0; i < friends.length -1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

        };
    


    }