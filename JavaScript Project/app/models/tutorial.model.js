const mongoose = require('mongoose');

const TutorialSchema = mongoose.Schema({
    Date: String,
    Time: String,
    students: {
        student_id1: {type: mongoose.Schema.Types.ObjectId,ref: 'students'},
        Attendence1: String,
        student_id2: {type: mongoose.Schema.Types.ObjectId,ref: 'students'},
        Attendence2: String,
        student_id3: {type: mongoose.Schema.Types.ObjectId,ref: 'students'},
        Attendence3: String,
        student_id4: {type: mongoose.Schema.Types.ObjectId,ref: 'students'},
        Attendence4: String,
        student_id5: {type: mongoose.Schema.Types.ObjectId,ref: 'students'},
        Attendence5: String,
    },
    tutor_id: {type: mongoose.Schema.Types.ObjectId,ref: 'tutors'},
    Fee: String,
    TutorialNumber: String,
    TutorialSubject: String,
    TutorialNotes: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Tutorial', TutorialSchema);