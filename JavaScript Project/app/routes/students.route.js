module.exports = (app) => {
    const students = require ('../controllers/students.controller');

    app.get('/',students.root);

    app.post('/students', students.create);

    app.get('/students', students.findAll);

    app.get('/students/:studentId', students.findOne);

    app.put('/students/:studentId', students.update);

    app.delete('/students/:studentId', students.delete);

    app.get('/FirstName/:s', students.searchFirstName);
    app.get('/Surname/:s', students.searchSurname);
}