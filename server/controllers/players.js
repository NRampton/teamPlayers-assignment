const mongoose = require('mongoose');
const Player = mongoose.model('Player');

module.exports = {
    displayAll(req,res){
        Player.find({}, (err,players) => {
            if (err) {
                return res.status(404).json(err);
            }
            return res.json(players);
        });
    },

    create(req,res){
        let newPlayer = new Player(req.body);
        newPlayer.save((err,player) => {
            if (err) {
                return res.status(404).json(err);
            }
            return res.json(player);
        });
    },
    update(req,res) {
        Player.findOne({_id: req.params.id}, (err,player) => {
            if (err) {
                return res.status(404).json(err);
            }
            console.log(req.body)
            games = req.body
            console.log(player)
            if('game1' in games){
              player.game1 = games.game1;
            
            }
            if('game2' in games){
              player.game2 = req.body.game2;
            }
            if('game3' in games){
            player.game3 = req.body.game3;
            }
            console.log(player)
            player.save(function(err){
                if (err) {
                    return res.status(404).json(err);
                }
                return res.json(player);
            })
            
        });
    },
    destroy(req,res) {
        var id = req.params.id;
        Player.remove({_id: id}, function (err){
            if (err) {
                return res.status(404).json(err);
            }
            return res.json(true);
        })
    }

    }
