const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courses.controller');

const url ='mongodb://localhost/playground';

const app = express();
app.use(express.json());


mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

app.use('/courses', courseRoutes);


con.on('open', () => console.log('Connected.......'));

app.listen(20200, () => console.log('Listening on port 20200........'));