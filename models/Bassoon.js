const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bassoonSchema = new Schema({
    notes: [{
        name: {
            type: String,
            required: true,
        },
        images: [{
            type: String,
            required: true,
        }]
    }],
    fingerings: [{
        name: {
        type: String,
        required: true
        },
        keys: [[String]],
    }]
})

const Bassoon = mongoose.model('Bassoon', bassoonSchema);

module.exports = Bassoon;