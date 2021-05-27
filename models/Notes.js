const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    notes: [{
        name: {
            type: String,
            required: true,
        },
        images: [{
            type: String,
            required: true,
        }]
    }]
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;