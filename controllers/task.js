import { Task } from "../models/task.js";

// create new task
export const newTask = async (req,res,next) =>{
try {
    const {title,description} = req.body;

await Task.create({
    title,
    description,
    user:req.user,
});

res.status(201).json({
    success:true,
    message:"Task added Successfully"
})
} catch (error) {
    return res.status(404).json({
        success:false,
        message:error
    })
}
}


// get user specific task
export const getMyTask = async (req,res,next) =>{
    
 try {
    const userid = req.user._id;
    
    const tasks = await Task.find({user:userid});

    res.status(200).json({
        success:true,
        tasks,
    })

 } catch (error) {
    return res.status(404).json({
        success:false,
        message:error
    })
 }
    
}

// update user specific task
export const updateTask = async (req,res,next) =>{
    
    try {
        const id = req.params.id;

    const task = await Task.findById(id);

    if(!task){
        return res.status(404).json({
            success:false,
            message:"Invalid Id"
        })
    }

    task.isCompleted = !task.isCompleted;

    await task.save();

    res.status(200).json({
        success:true,
        message:"Task Updated!"
    })
    } catch (error) {
        return res.status(404).json({
            success:false,
            message:error
        })
    }
    
}

// delete user specific task
export const deleteTask = async (req,res,next) =>{

    try {
        const id = req.params.id;

    const task = await Task.findById(id);

    if(!task){
        return res.status(404).json({
            success:false,
            message:"Invalid Id"
        })
    }

    await task.deleteOne();

    res.status(200).json({
        success:true,
        message:"Task deleted!"

    })
    } catch (error) {
        return res.status(404).json({
            success:false,
            message:error
        })
    }

    
}