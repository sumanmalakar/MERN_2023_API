import mongoose from "mongoose"

const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User", // schema name
       required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export const Task = mongoose.model("Task", schema);


