import { User } from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

export const getAllUsers = async (req, res) => {

    const users = await User.find();

    // console.log(req.query)
    // console.log(req.query.suman)

    const keywords = req.query
    console.log(keywords)

    res.status(201).json({
        success: 'true',
        // users:users,
        users,
    })
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({
        success: false,
        message: "Invalid credential"
    });

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return res.status(404).json({
        success: false,
        message: "Invalid credential"
    });

    sendCookie(user, res, `Welcome back, ${user.name}`, 200)

}



export const register = async (req, res) => {

    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) return res.status(404).json({
        success: false,
        message: "User already Exist"
    });

    const hashedPassword = await bcrypt.hash(password, 10)

    user = await User.create({ name, email, password: hashedPassword });


    sendCookie(user, res, "Registered Successfully", 201);


}





// export const specialFunc = (req,res) =>{
//     res.json({
//         success:true,
//         message:'Just Joking'
//     })
// }


export const getMyProfile = async (req, res) => {
    // const {id} = req.body;

    // const {id} = req.query;

    // console.log(req.params)

    // const {id} = req.params
    // const user = await User.findById(id)
    // res.json({
    //     success:true,
    //     user,
    //     // user:{}
    // })
  
    res.status(200).json({
        success: true,
        user:req.user
    })
}

export const logout = (req,res) =>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now())
    }).json({
        success:true,
        // user:req.user
    })
}




// export const updateUser =  async (req,res)=>{
//     // const {id} = req.body;

//     // const {id} = req.query;

//     // console.log(req.params)

//     const {id} = req.params
//     const user = await User.findById(id)
//     res.json({
//         success:true,
//         message:'Updated'
//     })
// }

// export const deleteUser =  async (req,res)=>{
//     // const {id} = req.body;

//     // const {id} = req.query;

//     // console.log(req.params)

//     const {id} = req.params
//     const user = await User.findById(id)

//     // await user.remove();

//     res.json({
//         success:true,
//         message:'Deleted'
//     })
// }