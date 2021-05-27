const db = require('./models');
const noteData = require('./notes.json');
const fingeringData = require('./fingerings.json');

db.Note.deleteMany({}, (err, deletedNotes) => {
    db.Note.create(noteData.notes, (err, seedNotes) => {
        if (err) console.log(err);

        console.log(noteData.notes.length, 'notes created successfully');
    })
})

db.Fingering.deleteMany({}, (err, deletedFingerings) => {
    db.Fingering.create(fingeringData.fingerings, (err, seedFingerings) => {
        if (err) console.log(err);

        console.log(fingeringData.fingerings.length, 'fingerings created successfully');

        process.exit();
    })
})