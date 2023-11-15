const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')
const makeId = require('../helpers/token')

// @desc Get goals
// @route GET api/goals
// @access Private
const getUsers = asyncHandler(async (req, res) => {
    const goals = await userModel.find();
    res.status(200).json(goals)
})

// @desc Set goals
// @route POST api/goals
// @access Private
const setUser = asyncHandler(async (req, res) => {
    if(!req.body.firstname){
        res.status(400).json({message: 'error message'})
    }

    console.log(req.body);
    const goal = await userModel.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        userType: req.body.userType,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        password: req.body.password,
        userCode : makeId(12)
    })

    res.status(200).send(goal);
})

// @desc Update goals
// @route PUT api/goals
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const goal = await userModel.findByIdAndUpdate(req.params.id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        userType: req.body.userType,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        password: req.body.password,
    },{
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
const deleteUser = asyncHandler(async(req, res) => {
    res.status(200).send(`delete goals ${req.params.id}`);
})

module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser
}