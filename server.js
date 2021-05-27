const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const routes = require('./routes');


app.use('/api/v1/notes', routes.notes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));