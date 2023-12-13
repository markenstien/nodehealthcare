const express = require('express')
const router = express.Router();

const {
    getAppointments,
    setAppointment
} = require('../controllers/appointmentController')

router.route('/').get(getAppointments).post(setAppointment);

module.exports = router;

// const {
//     getUsers,
//     setUser,
//     updateUser,
//     deleteUser
// } = require('../controllers/userController')

// router.route('/').get(getUsers).post(setUser)
// router.route('/:id').delete(deleteUser).put(updateUser)

// module.exports = router;