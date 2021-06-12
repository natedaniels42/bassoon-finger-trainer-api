const db = require('../models');
const notes = ['bflat1', 'b1', 'c2', 'dflat2', 'd2', 'eflat2', 'e2', 'f2', 'gflat2', 'g2', 'aflat2', 'a2', 'bflat2', 'b2', 'c3', 'dflat3', 'd3', 'eflat3', 'e3', 'f3', 'gflat3', 'g3', 'aflat3', 'a3', 'bflat3', 'b3', 'c4', 'dflat4', 'd4', 'eflat4', 'e4', 'f4', 'gflat4', 'g4', 'aflat4', 'a4', 'bflat4', 'b4', 'c5', 'dflat5', 'd5', 'eflat5', 'e5']

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

const findAnswers = (req, res) => {
    const randomNotes = [];

    while (randomNotes.length < 10) {
        const randomNumber = Number(req.params.bottom) + Math.floor(Math.random() * (Number(req.params.top) - Number(req.params.bottom)));
        
        if (!randomNotes.includes(notes[randomNumber])) {
            randomNotes.push(notes[randomNumber]);
        }
    }

    db.Note.find({name: { $in: randomNotes }}, (err, foundNotes) => {
        if (err) console.log(err);

        db.Fingering.find({name: { $in: randomNotes }}, (err, foundFingerings) => {
            if (err) console.log(err);

            res.status(200).json({foundNotes, foundFingerings});
        })
    })
}

module.exports = {
    create,
    findAnswers,
}