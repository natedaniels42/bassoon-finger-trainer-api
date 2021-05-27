const db = require('./models');
const data = require('./notes.json');

db.Note.deleteMany({}, (err, deletedNotes) => {
    db.Note.create(data.notes, (err, seedNotes) => {
        if (err) console.log(err);

        console.log(data.notes.length, 'notes created successfully');

        process.exit();
    })
})