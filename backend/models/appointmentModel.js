const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    appointmentReference : {
        type: String,
        required: true
    },

    appointeeID : {
        type: String,
        required: true
    },

    appointeeDetails : {
        type : String,
        email : String,
        mobileNumber : String
    },

    appointmentDate : {
        type: String,
        required : true
    },
    
    notes : {
        type: String,
    },

    remarks : {
        type: String
    },

    status: {
        type : String,
        enum : ['Reserved', 'Arrived', 'Cancelled']
    }
}, {
    timestamps : true
});

module.exports = mongoose.model('Appointment', paymentSchema);