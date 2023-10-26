import { User } from "../models/user.js";

export const getAllUsers = async (req,res)=>{

    const users = await User.find();

    // console.log(req.query)
    // console.log(req.query.suman)

    const keywords = req.query
    console.log(keywords)

    res.status(201).json({
        success:'true',
        // users:users,
        users,
    })
}


export const register = async (req,res)=>{

    const {name,email,password} = req.body;
    const users = await User.create({
        name,email,password
    });

    res.cookie("suman","cookie").json({
        success:'true',
        // users:users,
      message:"Registered SuccessFully!"
    })
}

export const specialFunc = (req,res) =>{
    res.json({
        success:true,
        message:'Just Joking'
    })
}


export const getUserDetails =  async (req,res)=>{
    // const {id} = req.body;

    // const {id} = req.query;

    // console.log(req.params)

    const {id} = req.params
    const user = await User.findById(id)
    res.json({
        success:true,
        user,
        // user:{}
    })
}

export const updateUser =  async (req,res)=>{
    // const {id} = req.body;

    // const {id} = req.query;

    // console.log(req.params)

    const {id} = req.params
    const user = await User.findById(id)
    res.json({
        success:true,
        message:'Updated'
    })
}

export const deleteUser =  async (req,res)=>{
    // const {id} = req.body;

    // const {id} = req.query;

    // console.log(req.params)

    const {id} = req.params
    const user = await User.findById(id)

    // await user.remove();

    res.json({
        success:true,
        message:'Deleted'
    })
}