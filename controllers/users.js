const User =require('../models/users');


const getAllUsers = (req,res,next)=>{
    const query={};
    User.find(query,(err,users)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(users);
    });
}

const createUser = (req,res,next)=>{
    const {body} = req
User.create(body,(err,user)=>{
    if(err){
        res.status(500).json({err});
        return;
    }
    res.json(user);
});
}

const getOneUser = (req,res,next)=>{
    const {id} = req.params
    User.findById(id,(err,user)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(user);
    })
}

const updateUser = (req,res,next)=>{
    const _id=req.params.id;
    const {body} =req;

    const query = {_id};
    User.findByIdAndUpdate(query,body,{new: true},(err,user)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(user);
    })
}

const deleteUser = (req,res,next)=>{
    const _id=req.params.id
    const query = {_id};
    User.remove(query, (err,data)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
    });
    res.json({success:true});
}

module.exports={createUser,getAllUsers,getOneUser,updateUser,deleteUser};