const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
    .then(() => {
        console.log('Connected to MongoDB...');
    })
    .catch(err => console.error('Could not connect to MongoDB...', err));

    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: { type: Date, default: Date.now},
        isPublished: Boolean
    });
    const Course = mongoose.model('Course', courseSchema);

    async function CreateCourse() {
    const course = new Course({
        name: 'Nest',
        author: 'Vandhu',
        tags: ['nest', 'B/E'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);

    }

   // CreateCourse();

    async function getCourses() {
        const courses = await Course.find();
        console.log('courses',courses);
    }
    
    getCourses();

    async function getCoursesByAuthor() {
        const courses = await Course.find({author: 'Vandhu'})
        .limit(10)
        .sort({name:1})
        .select({name: 1, tags: 1});
        console.log('coursesByAuthor.........',courses);
    }
    
    getCoursesByAuthor();


    