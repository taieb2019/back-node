const Admin =require('../models/admins');


const getAllAdmins = (req,res,next)=>{
    const query={};
    Admin.find(query,(err,admins)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(admins);
    });
}

const createAdmin = (req,res,next)=>{
    let admin = new Admin(req.body);
    admin.save()
    .then(admin => {
        res.status(200).json({'admin': 'admin in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
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