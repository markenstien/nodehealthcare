const asyncHandler = require('express-async-handler')
const servicesModel = require('../models/servicesModel')
const makeId = require('../helpers/token');
const validEntityOnly = require('../helpers/validEntityOnly');

// @desc Get goals
// @route GET api/goals
// @access Private
const get = asyncHandler(async (req, res) => {
    let id = req.query.id ?? '';
    let response = '';
    if(id != '') {
        response = await servicesModel.find({
            _id: req.query.id
        });

        response = response[0] ?? false;
    } else {
        response = await servicesModel.find();
    }
    res.status(200).json(response)
})

// @desc Set goals
// @route POST api/goals
// @access Private
const set = asyncHandler(async (req, res) => {
    let validEntities = validEntityOnly({
        validEntities : [
            'serviceName',
            'serviceDescription',
            'serviceAmount'
        ],
        objectData : req.body
    });

    validEntities['serviceCode'] = makeId(5);

    const response = await servicesModel.create(validEntities)

    res.status(200).send(response);
})

// @desc Update goals
// @route PUT api/goals
// @access Private
const update = asyncHandler(async (req, res) => {
    // let body = JSON.parse(req.body);
        const goal = await servicesModel.findByIdAndUpdate(req.params.id, req.body,{
            new : true
        })
        
        res.status(200).send({
            message : `update goals ${req.params.id}`,
            data : goal
        });
    }
)
// @desc Delete goals
// @route DELETE api/goals
// @access Private
const destroy = asyncHandler(async(req, res) => {
    const response = await servicesModel.deleteOne({
        _id: req.params.id
    });
    res.status(200).send({
        message : 'deleted'
    });
})

module.exports = {
    get,
    set,
    update,
    destroy
}