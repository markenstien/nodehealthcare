const asyncHandler = require('express-async-handler')
const appointmentModel = require('../models/appointmentModel');
const makeId = require('../helpers/token');
const validEntityOnly = require('../helpers/validEntityOnly');

// @desc Get goals
// @route GET api/goals
// @access Private
const getAppointments = asyncHandler(async(req, res) => {
    let id = req.query.id ?? '';
    let appointments = [];

    if(id != '') {
        appointments = await appointmentModel.find({
            _id : '6579e34fa5b40f1627cca64c'
        });

        appointments = appointments[0] ?? false;
    } else {
        appointments = await appointmentModel.find();
    }
    res.status(200).json(appointments)
})

const setAppointment = asyncHandler(async(req, res) => {

    let appointmentObject = validEntityOnly({
        validEntities : [
            'guestName',
            'guestMobileNumber',
            'guestEmail',
            'appointmentDate',
            'notes',
            'status'
        ],
        objectData : req.body
    });

    if(!appointmentObject.hasOwnProperty('status')){
        appointmentObject['status'] = 'Reserved';
    }
    appointmentObject['appointmentReference'] = makeId(12);

    // console.log(appointmentObject);

    const appointmentResponse = await appointmentModel.create(appointmentObject)

    res.status(200).send([
        appointmentObject,
        appointmentResponse
    ]);
})
module.exports = {
    getAppointments,
    setAppointment
}