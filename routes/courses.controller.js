const { response } = require('express');
const express = require('express');
const router = express.Router();
const Courses = require('../models/courses');

router.get('/', async (req, res) => {
    try {
        const courses = await Courses.find();
        res.json(courses);
    }catch(err) {
        res.send('Error', err);
    }
});

router.get('/:author', async (req, res) => {
    try {
        const courses = await Courses.find({author: req.params.author});
        res.json(courses);
    }catch(err) {
        res.send('Error', err);
    }
});

router.post('/', async (req,res) => {
    try {
        const courses = new Courses (req.body);
        const result = await courses.save();
        res.send(result);
    }catch(err) {

    }
});

router.put('/:name', async (req,res) => {
    try {
        const course = await Courses.findOne({name: req.params.name});
        course.isPublished = req.body.isPublished;
        console.log(course);
        const data = await course.save();
        res.json(data);
    }catch(err) {
        res.send('Error', err);
    }
});

router.delete('/:name', async (req,res) => {
    try {
        const course = await Courses.find({name: req.params.name});
        const result = await Courses.deleteOne({name: req.params.name});
        res.json(result);

    }catch(err) {
        res.send('Error', err);
    }
});

module.exports = router;
