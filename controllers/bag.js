import { Bagmodule, sequelize } from "../models/Bagmodule.js";
await sequelize.sync();
const bag ={
    index: async (req,res) => {
        const data = await Bagmodule.findAll();
        res.render("home", {data});
    },
    edit: async (req,res) => {
        const {id} = req.params;
        const data = await Bagmodule.findByPk(id);
        res.render("edit", {data});

    },
    add: (req,res)=> {
        res.render("add");
    },
    insert: async(req,res) => {
    const {Name, Size , Brand, Price, Color, DateCreated} = req.body;
    await Bagmodule.create({Name, Size, Brand, Price, Color, DateCreated });
    res.redirect("/");
    },
    update:async(req ,res) => {
        const {id} = req.params;
        const {Name, Size, Brand , Price, Color, DateCreated} = req.body;
        await Bagmodule.update({
             Name, Size, Brand, Price, Color, DateCreated
        },{where:{id}});
        res.redirect("/");
      },
      delete:async(req,res)=> {
        const {id} = req.params;
        await Bagmodule.destroy({where:{id}});
        res.redirect("/");
      }
};
export { bag };