const express = require('express')
const router = express.Router();

const {
    getAppointments,
    setAppointment,
    destroy,
    update
} = require('../controllers/appointmentController')

router.route('/').get(getAppointments).post(setAppointment);
router.route('/:id').delete(destroy).put(update);

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