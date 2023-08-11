module.exports = (app) => {
    const tutors = require ('../controllers/tutors.controller');

    app.get('/',tutors.root);

    app.post('/tutors', tutors.create);

    app.get('/tutors', tutors.findAll);

    app.get('/tutors/:tutorId', tutors.findOne);

    app.put('/tutors/:tutorId', tutors.update);

    app.delete('/tutors/:tutorId', tutors.delete);

    app.get('/FirstName/:s', tutors.searchFirstName);
    app.get('/Surname/:s', tutors.searchSurname);
}