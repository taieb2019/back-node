const Admin =require('../models/admins');


const getAllAdmins = (req,res,next)=>{
    const query={};
    Admin.find(query,(err,admins)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(users);
    });
}

const createAdmin = (req,res,next)=>{
    const {body} = req
Admin.create(body,(err,admin)=>{
    if(err){
        res.status(500).json({err});
        return;
    }
    res.json(admin);
});
}

const getOneAdmin= (req,res,next)=>{
    const {id} = req.params
    Admin.findById(id,(err,admin)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(admin);
    })
}

const updateAdmin= (req,res,next)=>{
    const _id=req.params.id;
    const {body} =req;

    const query = {_id};
    Admin.findByIdAndUpdate(query,body,{new: true},(err,admin)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(admin);
    })
}

const deleteAdmin = (req,res,next)=>{
    const _id=req.params.id
    const query = {_id};
    Admin.remove(query, (err,data)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
    });
    res.json({success:true});
}

module.exports={createAdmin,getAllAdmins,getOneAdmin,updateAdmin,deleteAdmin};