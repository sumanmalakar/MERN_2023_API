import express from 'express'
import mongoose from 'mongoose';

const app = express();

//Using Middleware for getting json input from thunderclient

app.use(express.json())



mongoose.connect("mongodb+srv://codesnippet02:HZzwOAda0bk0L0Hg@nodeexpressyoutube.s3iwy2j.mongodb.net/", {
    dbName: "MERN-2023"
}).then(() => console.log("MongoDb is Connected..!")).catch((e)=>console.log(e))




const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})



const User = mongoose.model("User",schema)

app.get('/',(req,res)=>{
    res.send("Nice working")
})

app.get('/users/all',async (req,res)=>{

    const users = await User.find();

    res.json({
        success:'true',
        // users:users,
        users,
    })
})


app.post('/users/new',async (req,res)=>{

    const {name,email,password} = req.body;

    

    const users = await User.create({
        name,email,password
    });

    res.json({
        success:'true',
        // users:users,
      message:"Registered SuccessFully!"
    })
})

app.listen(4000,()=>console.log("server is working"))