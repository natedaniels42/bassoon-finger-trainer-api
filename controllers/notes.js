const db = require('../models');

const index = (req, res) => {
    db.Note.find({}, (err, foundNotes) => {
        if (err) console.log('Error in notesindex', err);

        res.status(200).json(foundNotes);
    })
}

const show = (req, res) => {
    db.Note.findById(req.params.id, (err, foundNote) => {
        if (err) console.log(err);

        res.status(200).send(foundNote);
    })
}


module.exports = {
    index,
    show,
}