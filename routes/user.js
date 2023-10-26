import express from 'express'

import { getAllUsers, register, specialFunc, getUserDetails, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.get('/all', getAllUsers)


router.post('/new', register)


router.get("userid/special", specialFunc)

//shortcut
// router.route('/userid/:id').get(getUserDetails).put(updateUser).delete(deleteUser)


// get single user
router.get("/userid/:id", getUserDetails)


// update user
router.put("/userid/:id", updateUser)


// delete user
router.delete("/userid/:id", deleteUser)


export default router;