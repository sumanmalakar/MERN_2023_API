import express from 'express'
import { getMyTask, newTask,updateTask,deleteTask } from '../controllers/task.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

// create new task
router.post('/new',isAuthenticated, newTask);


// get user specific task
router.get('/my',isAuthenticated, getMyTask);


// update task
router.put("/:id",isAuthenticated,updateTask)


// delete task
router.delete("/:id",isAuthenticated,deleteTask)



export default router;