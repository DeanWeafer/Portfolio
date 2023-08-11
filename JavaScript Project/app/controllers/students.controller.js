
const Students = require('../models/student.model');



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

    const student = new Students({
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
        DoB: req.body.DoB,
        Parent: req.body.Parent,
        AttendVirtually: req.body.AttendVirtually,
        Gender: req.body.Gender,
        Subject: req.body.Subject

        
            
        
        
    });

    student.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An Error Occurred while creating a student"
        });
    });

};

// Find all students
exports.findAll =(req,res) =>{
    Students.find()
    .then(student => {
        res.send(student);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while finding all students"
        });
    });

};

exports.findOne = (req,res) =>{
    Students.findByID(req.params.studentId)
    .then(student => {
        if(!student){
            res.status(404).send({
                message: "Student not found with " + req.params.studentId
            });
        }
        res.send(student)
    }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Student not found with " + req.params.studentId
            });
        }
        return res.status(500).send({
            message: err.message || "Error occured while finding customer with id " + req.params.studentId
        });
    });
};

exports.update=(req,res) => {
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Update Request cannot be empty"
    //     });
    // }
    Students.findByIdAndUpdate(req.params.studentId, {
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
        DoB: req.body.DoB,
        Parent: req.body.Parent,
        AttendVirtually: req.body.AttendVirtually,
        Gender: req.body.Gender,
        Subject: req.body.Subject
    
    }, { $set: req.body},
       {new:true})
       .then(student => {
        if(!student){
            return res.status(404).send({
                message: "Student with id" + req.params.studentId + "cannot be found"
            });
        }
        res.send(student);
       }).catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Student with id" + req.params.studentId + "cannot be found"
            });
        }
        res.status(500).send({
            message: err.message || "Error updating Student with id " + req.params.studentId
        });
       });
};

exports.delete =(req, res) => {
        Students.findByIdAndRemove(req.params.studentId)
        .then(student => {
            if(!student){
                return res.status(404).send({
                    message: "Student with id " + req.params.studentId + " not found"
                });
            }
            res.send({message: "Student deleted successfully"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === "NotFound"){
                    return res.status(404).send({
                        message: "Student with id " + req.params.studentId + " not found"
                    });
            }
            return res.status(500).send({
                message: err.message || "Error occuerred while deleting student"
            });
        });
};

exports.root = (req,res) => {
    Students.find()
    .then(students => {
        res.render('students_view', {
        results: students
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occured while retrieving all students"
        });
    });
};

exports.searchFirstName = (req,res) => {
    var search = req.params.s;
    console.log("Searching Students: " + search)
    Students.find({ FirstName: new RegExp(search, "ig")})
    .then(student => {
        res.render('students_view', {
            results: student
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occured while retrieving all students"
        });
    });
};

exports.searchSurname = (req,res) => {
    var search = req.params.s;
    console.log("Searching Students: " + search)
    Students.find({ Surname: new RegExp(search, "ig")})
    .then(student => {
        res.render('students_view', {
            results: student
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error has occured while retrieving all students"
        });
    });
};