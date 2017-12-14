const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const PLAYERS = 'players-mean-demon';

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://localhost/${PLAYERS}`,() => console.log(`connected to the ${PLAYERS} database`));

//import all of the models

const models_path = path.resolve(__dirname, '..', 'models');

fs.readdirSync(models_path).forEach(file => {
    if(/\.js$/.test(file)) {
        require(models_path+'/'+file);
    }
});
