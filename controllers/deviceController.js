import {Devicemodel, sequelize } from "../models/Devicemodel.js";

export const deviceController ={
  index: async (req, res) => {
    res.send("Index Page");
  },
  insert:async(req,res) => {
    const {Name, Shape, Description , Type, DateCreated} = req.body;
    const e = await Devicemodel.create({
        Name, Shape, Description, Type, DateCreated });
    res.status(201).json({
        "status":"true",
        "data": e

    });
  },
  all:async(req,res) =>{
    const data = await Devicemodel.findAll();
    res.json(data);
    
  },
  one: async(req,res) => {
    const id = req.params.id;
    const data = await Devicemodel.findByPk(id);
    res.json({
        "data":data
    });
  },
  update:async(req ,res) => {
    const {id} = req.params;
    const{Name, Shape, Description , Type, DateCreated} = req.body;
    const rep = await Devicemodel.update ({

         Name, Shape, Description, Type, DateCreated

    },{where:{id}});

    res.json(rep);

  },
  delete:async(req,res)=> {
    const {id} = req.params;
    await Devicemodel.destroy({where:{id}});
    res.json({"message":"deleted"});
  }
};
export {Devicemodel};