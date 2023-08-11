module.exports = (app) => {
    const tutorials = require ('../controllers/tutorials.controllers');

    // app.get('/',tutorials.root);

    app.post('/tutorials', tutorials.create);

    app.get('/tutorials', tutorials.findAll);

    app.get('/tutorials/:tutorialId', tutorials.findOne);

    app.put('/tutorials/:tutorialId', tutorials.update);

    app.delete('/tutorials/:tutorialId', tutorials.delete);

    app.get('/TutorialNumber/:s', tutorials.searchTutorial);
}