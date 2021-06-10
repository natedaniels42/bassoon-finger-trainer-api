const db = require('../models');

const index = (req, res) => {
    db.Fingering.find({}, (err, foundFingerings) => {
        if (err) console.log(err);

        res.status(200).json(foundFingerings);
    })
};

const show = (req, res) => {
    db.Fingering.findById(req.params.id, (err, foundFingering) => {
        if (err) console.log(err);

        res.status(200).json(foundFingering);
    })
}

const getByName = (req, res) => {
    db.Fingering.find({name: req.params.name}, (err, foundFingering) => {
        if (err) console.log(err);

        res.status(200).json(foundFingering);
    })
}

module.exports = {
    index,
    show,
    getByName,
}