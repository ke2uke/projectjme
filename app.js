const express = require('express');
const app = express();

const path = require('path');

const index = require('./routes/index.js');

app.locals.css = path.join(__dirname, '/public/css');
app.locals.js = path.join(__dirname, '/public/js');

app.use(express.static(app.locals.css));
app.use(express.static(app.locals.js));

app.use("/", index);

app.listen(3000);
