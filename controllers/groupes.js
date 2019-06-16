const Groupe =require('../models/groupes');

const getAllGroupes = (req,res,next)=>{
    const query={'role':req.query.roleName};
    User.find(query,(err,groupes)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(groupes);
    });
}

const createGroupe = (req,res,next)=>{
    let groupe = new Groupe(req.body);
    groupe.save()
    .then(groupe => {
        res.status(200).json({'groupe': 'groupe in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
}

const getOneGroupe = (req,res,next)=>{
    const {id} = req.params
    Groupe.findById(id,(err,groupe)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(groupe);
    })
}

const updateGroupe = (req,res,next)=>{
    const _id=req.params.id;
    const {body} =req;

    const query = {_id};
    Groupe.findByIdAndUpdate(query,body,{new: true},(err,groupe)=>{
        if(err){
            res.status(500).json({err});
            return;
        }
        res.json(groupe);
    })
}

const deleteGroupe = (req,res,next)=>{
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

module.exports={createGroupe,getAllGroupes,getOneGroupe,updateGroupe,deleteGroupe};