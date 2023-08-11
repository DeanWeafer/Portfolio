const mongoose = require('mongoose');

const TutorSchema = mongoose.Schema({
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
    }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Tutor', TutorSchema);