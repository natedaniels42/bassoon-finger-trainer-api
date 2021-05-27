const db = require('../models');

const index = (req, res) => {
    db.Fingering.find({}, (err, foundFingerings) => {
        if (err) console.log(err);

        res.status(200).json(foundFingerings);
    })
};

module.exports = {
    index,
}