const playerController = require('../controllers/players');

module.exports = function(app) {
    app.get('/players', (req,res)=>{
    playerController.displayAll(req, res);
    });
    app.post('/players', (req,res)=>{
    playerController.create(req, res);
    });
    app.put('/players/:id', (req,res)=>{
        playerController.update(req, res);
        });

    app.delete('/players/:id', (req,res)=>{
    playerController.destroy(req, res);
    });
}
