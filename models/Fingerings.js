const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fingeringSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    keys: [[]],
})

const Fingering = mongoose.model('Fingering', fingeringSchema);

module.exports = Fingering;