import express from 'express'

import {
    getAllUsers,
    register,
    // specialFunc,
    getMyProfile,
    // updateUser,
    // deleteUser,
    login,
    logout
} from '../controllers/user.js';

import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.get('/all', getAllUsers)


router.post('/new', register)

router.post('/login', login)


router.get('/logout', logout)




// router.get("userid/special", specialFunc)

//shortcut
// router.route('/userid/:id').get(getUserDetails).put(updateUser).delete(deleteUser)


// get single user
// router.get("/userid/:id", getMyProfile)
router.get("/me",isAuthenticated, getMyProfile)


// update user
// router.put("/userid/:id", updateUser)


// delete user
// router.delete("/userid/:id", deleteUser)


export default router;