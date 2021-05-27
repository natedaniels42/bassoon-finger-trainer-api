const db = require('../models');

const index = (req, res) => {
    db.Note.find({}, (err, foundNotes) => {
        if (err) console.log('Error in notesindex', err);

        res.status(200).json(foundNotes);
    })
}

module.exports = {
    index,
}