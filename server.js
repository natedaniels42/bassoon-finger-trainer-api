const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const routes = require('./routes');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    optionsSuccessStatus: 200
}));


app.use('/api/v1/notes', routes.notes);
app.use('/api/v1/fingerings', routes.fingerings);
app.use('/api/v1/bassoon', routes.bassoon);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));