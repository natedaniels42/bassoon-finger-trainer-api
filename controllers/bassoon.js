const db = require('../models');

const create = (req, res) => {
    db.Note.find({}, (err, foundNotes) => {
        db.Fingering.find({}, (err, foundFingerings) => {
            if (err) console.log(err);

            db.Bassoon.create(req.body, (err, savedBassoon) => {
                if (err) console.log(`Error in create`, err);

                for (let i = 0; i < foundNotes.length; i++) {
                    savedBassoon.notes.push(foundNotes[i]);
                    savedBassoon.fingerings.push(foundFingerings[i]);
                }

                savedBassoon.save((err, updatedBassoon) => {
                    if (err) console.log(err);

                    res.status(200).json({updatedBassoon});
                })
            })
        })
    })
}

module.exports = {
    create,
}