var mongoose = require('mongoose');
let Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength:[5, 'Name must be longer than 5 characters']
    },
    position: {
        type: String,
        default: '',
    },
    game1: {
        type: String,
        default: 'Undecided'
    },
    game2: {
        type: String,
        default: 'Undecided'
    },
    game3: {
        type: String,
        default: 'Undecided'
    }
}, {timestamps: true});

mongoose.model('Player', PlayerSchema);
const Player = mongoose.model('Player');
