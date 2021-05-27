const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fingeringSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    keys: [[String]],
})

const Fingering = mongoose.model('Fingering', fingeringSchema);

module.exports = Fingering;