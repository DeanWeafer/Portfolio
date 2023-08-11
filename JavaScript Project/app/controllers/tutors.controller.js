
const Tutors = require('../models/tutor.model');

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

    const tutor = new Tutors({
        title: req.body.title,
        FirstName: req.body.FirstName,
        Surname: req.body.Surname,
        Phone: req.body.Phone,
        Email: req.body.Email,
        home: {
            AddressLine1: req.body.AddressLine1,
            AddressLine2: req.body.AddressLine2,
            Town: req.body.Town,
            Country: req.body.Country,
            Eircode: req.body.Eircode
        }, 
    });

    tutor.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An Error Occurred while creating a tutor"
        });
    });

};



// Find all tutor
exports.findAll =(req,res) =>{
    Tutors.find()
    .then(tutor => {
        res.send(tutor);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while finding all tutors"
        });
    });

};

exports.findOne = (req,res) =>{
    Tutors.findByID(req.params.student_id)
    .then(tutor => {
        if(!tutor){
            res.status(404).send({
                message: "Tutor not found with " + req.params.tutor_id
            });
        }
        res.send(tutor)
    }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Tutor not found with " + req.params.tutor_id
            });
        }
        return res.status(500).send({
            message: err.message || "Error occured while finding tutor with id " + req.params.tutor_id
        });
    });
};

exports.update=(req,res) => {
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Update Request cannot be empty"
    //     });
    // }
    Tutors.findByIdAndUpdate(req.params.tutor_id, {
        title: req.body.title,
        FirstName: req.body.FirstName,
        Surname: req.body.Surname,
        Phone: req.body.Phone,
        Email: req.body.Email,
        home: {
            AddressLine1: req.body.AddressLine1,
            AddressLine2: req.body.AddressLine2,
            Town: req.body.Town,
            Country: req.body.Country,
            Eircode: req.body.Eircode
        },
        
    
    }, { $set: req.body},
       {new:true})
       .then(tutor => {
        if(!tutor){
            return res.status(404).send({
                message: "Tutor with id" + req.params.tutor_id + "cannot be found"
            });
        }
        res.send(tutor);
       }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Tutor with id" + req.params.tutor_id + "cannot be found"
            });
        }
        res.status(500).send({
            message: err.message || "Error updating Tutor with id " + req.params.tutor_id
        });
       });
};

exports.delete =(req, res) => {
        Tutors.findByIdAndRemove(req.params.tutor_id)
        .then(tutor => {
            if(!tutor){
                return res.status(404).send({
                    message: "Tutor with id " + req.params.tutor_id + " not found"
                });
            }
            res.send({message: "Tutor deleted successfully"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === "NotFound"){
                    return res.status(404).send({
                        message: "Tutor with id " + req.params.tutor_id + " not found"
                    });
            }
            return res.status(500).send({
                message: err.message || "Error occuerred while deleting tutor"
            });
        });
};

exports.root = (req,res) => {
    Tutors.find()
    .then(tutors => {
        res.render('students_view', {
        results: tutors
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occured while retrieving all students"
        });
    });
};

exports.searchFirstName = (req,res) => {
    var search = req.params.s;
    console.log("Searching Tutors: " + search)
    Tutors.find({ FirstName: new RegExp(search, "ig")})
    .then(tutors => {
        res.render('students_view', {
            results: tutors
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occured while retrieving all students"
        });
    });
};

exports.searchSurname = (req,res) => {
    var search = req.params.s;
    console.log("Searching Tutors: " + search)
    Tutors.find({ Surname: new RegExp(search, "ig")})
    .then(tutors => {
        res.render('students_view', {
            results: tutors
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occured while retrieving all students"
        });
    });
};