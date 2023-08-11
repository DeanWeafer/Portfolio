
const Tutorials = require('../models/tutorial.model');



// Create new customer and save it to the MongoDB database
exports.create = (req,res) =>{
    // //If request is empty then send message and reject request
    // if(!req.body.content){
    //     return res.status(400).send({
    //         message: "Customer info cannot be empty"
    //     });
    // }
    // if(req.body.title != "Mr" && req.body.Title != "Mrs" && req.body.Title != "Dr" && req.body.Title != "Ms" && req.body.Title != "Miss"){
    //     return res.status(400).send({
    //         message: "Title must be either: Mr, Mrs, Dr, Ms, or Miss"
    //     });

    // }

    const tutorial = new Tutorials({
        Date: req.body.Date,
        Time: req.body.Time,
        students:{
            student_id1: req.body.student_id1,
            Attendence1: req.body.Attendence1,
            student_id2: req.body.student_id2,
            Attendence2: req.body.Attendence2,
            student_id3: req.body.student_id3,
            Attendence3: req.body.Attendence3,
            student_id4: req.body.student_id4,
            Attendence4: req.body.Attendence4,
            student_id5: req.body.student_id5,
            Attendence5: req.body.Attendence5,
        },
        tutor_id: req.body.tutor_id,
        Fee: req.body.Fee,
        TutorialNumber: req.body.TutorialNumber,
        TutorialSubject: req.body.TutorialSubject,
        TutorialNotes: req.body.TutorialNotes

    });

    tutorial.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An Error Occurred while creating a tutorial"
        });
    });

};

// exports.root = (req,res) => {
//     Tutorials.find()
//     .then(tutorials => {
//         res.render('students_view', {
//         results: tutorials
//         });
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "An error has occured while retrieving all students"
//         });
//     });
// };

exports.searchTutorial = (req,res) => {
    var search = req.params.s;
    console.log("Searching Tutorials: " + search)
    Tutorials.find({ TutorialNumber: new RegExp(search, "ig")})
    .then(tutorials => {
        res.render('students_view', {
            results: tutorials
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occured while retrieving all students"
        });
    });
};

// Find all tutorial
exports.findAll =(req,res) =>{
    Tutorials.find()
    .then(tutorial => {
        res.send(tutorial);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while finding all tutorials"
        });
    });

};

exports.findOne = (req,res) =>{
    Tutorials.findByID(req.params.tutorialId)
    .then(tutorial => {
        if(!tutorial){
            res.status(404).send({
                message: "Tutorial not found with " + req.params.tutorialId
            });
        }
        res.send(tutorial)
    }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Tutorial not found with " + req.params.tutorialId
            });
        }
        return res.status(500).send({
            message: err.message || "Error occured while finding tutorial with id " + req.params.tutorialId
        });
    });
};

exports.update=(req,res) => {
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Update Request cannot be empty"
    //     });
    // }
    Tutorials.findByIdAndUpdate(req.params.tutorialId, {
        Date: req.body.Date,
        Time: req.body.Time,
        students:{
            student_id1: {type: mongoose.Schema.Types.ObjectId,ref: 'students'},
            Attendence1: req.body.Attendence1,
            student_id2: {type: mongoose.Schema.Types.ObjectId,ref: 'students'},
            Attendence2: req.body.Attendence2,
            student_id3: {type: mongoose.Schema.Types.ObjectId,ref: 'students'},
            Attendence3: req.body.Attendence3,
            student_id4: {type: mongoose.Schema.Types.ObjectId,ref: 'students'},
            Attendence4: req.body.Attendence4,
            student_id5: {type: mongoose.Schema.Types.ObjectId,ref: 'students'},
            Attendence5: req.body.Attendence5,
        },
        tutor_id: {type: mongoose.Schema.Types.ObjectId,ref: 'tutors'},
        Fee: req.body.Fee,
        TutorialNumber: req.body.TutorialNumber,
        TutorialSubject: req.body.TutorialSubject,
        TutorialNotes: req.body.TutorialNotes
    
    }, { $set: req.body},
       {new:true})
       .then(tutorial => {
        if(!tutorial){
            return res.status(404).send({
                message: "Tutorial with id" + req.params.tutorialId + "cannot be found"
            });
        }
        res.send(tutorial);
       }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Tutorial with id" + req.params.tutorialId + "cannot be found"
            });
        }
        res.status(500).send({
            message: err.message || "Error updating Tutorial with id " + req.params.tutorialId
        });
       });
};

exports.delete =(req, res) => {
        Tutorials.findByIdAndRemove(req.params.tutorialId)
        .then(tutorial => {
            if(!tutorial){
                return res.status(404).send({
                    message: "Tutorial with id " + req.params.tutorialId + " not found"
                });
            }
            res.send({message: "Tutorial deleted successfully"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === "NotFound"){
                    return res.status(404).send({
                        message: "Tutorial with id " + req.params.tutorialId + " not found"
                    });
            }
            return res.status(500).send({
                message: err.message || "Error occuerred while deleting tutorial"
            });
        });
};