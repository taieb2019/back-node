const User =require('../models/users');

var chef=[];
const getAllUsers = (req,res,next)=>{
    const query={'role':req.query.roleName};
    User.find(query,(err,users)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(users);
    });
}
const createUser = (req,res,next)=>{
    let user = new User(req.body);
    user.save()
    .then(user => {
        res.status(200).json({'user': 'user in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
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