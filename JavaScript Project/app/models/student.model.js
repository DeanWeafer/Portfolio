const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    title: String,
    FirstName: String,
    Surname: String,
    Phone: String,
    Email: String,
    home: {
        AddressLine1: String,
        AddressLine2: String,
        Town: String,
        Country: String,
        Eircode: String
    },
    DoB: String,
    Parent: String,
    AttendVirtually: String,
    Gender: String,
    Subject: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', StudentSchema);