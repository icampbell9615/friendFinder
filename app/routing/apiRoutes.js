var friendsData = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function(req, res) {
        var newFriend = req.body;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        for(var i = 0; i < friendsData.length; i++){
            var thisFriend = friendsData[i];
            var thisDiff = 0
            
            for(var j = 0; j < thisFriend.scores.length; j++){
                var friendAnswer = parseInt(thisFriend.scores[j]);
                var newAnswer = parseInt(newFriend.scores[j]);

                var diff = Math.abs(friendAnswer - newAnswer);
                thisDiff += diff
            }

            if(thisDiff < bestMatch.friendDifference){
                bestMatch.name = thisFriend.name
                bestMatch.photo = thisFriend.photo
                bestMatch.friendDifference = thisDiff
            }
        }
        
        friendsData.push(newFriend);
        res.json(bestMatch)
    })

}