
      import  express  from "express";
      import mongoose from "mongoose";
      const router = express.Router();
      import Toy from "../models/toys.js"
      import Categorie from "../models/categories.js"

      // **Create**/////////////////////////////////////////////////////
      router.post("/", async (req, res) => {
      try {
      const newToy = new Toy({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        categories:[],
        categorie_id: req.body.categorie_id
      });
      await newToy.save();
      res.json({ message: "Created" });
      } catch (error) {
      res.status(400).json({ error: error.message });
      }
      });


router.get('/projects', (req, res, next) => {
  Project.find().populate('tasks')
    .then(allTheProjects => {
      res.json(allTheProjects);
    })
    .catch(err => {
      res.json(err);
    })
});







      // **ReadAll**/////////////////////////////////////////////////////
      router.get("/", async (req, res) => {
      try {
      const toys = await Toy.find();
      res.json(toys);
      } catch (error) {
      res.status(400).json({ error: error.message });
      }
      });

      // **ReadId**/////////////////////////////////////////////////////////
      router.get("/:id", async (req, res) => {
      try {
      const toys = await Toy.findById(req.params.id);
      res.json(toys);
      } catch (error) {
      res.status(400).json({ error: error.message });
      }
      });

      //**Update**//////////////////////////////////////////////////////////
      router.put('/:id', async (req, res) => {
      let updates = req.body // nous definissons une variable égale à l'ensemble du req.body
      try {
      if(await Toy.findByIdAndUpdate({_id:req.params.id},updates,{new:true})){
        res.json({ message: "Updated" });
      } else {
        res.status(400).json({ message: "Missing id" });
      }
      } catch (error) {
      res.status(400).json({ error: error.message });
      }
      });

      // **DeleteId**////////////////////////////////////////////////////////
      router.delete('/:id', async (req, res) => {
      const id = req.params.id;

      try {
      if(await Toy.findByIdAndDelete({_id:req.params.id})){
        res.json({ message: "Removed" });
      } else {
        res.status(400).json({ message: "Missing id" });
      }
      } catch (error) {
      res.status(400).json({ error: error.message });
      }
      });

      // **DeleteAll**
      router.delete('/', async (req, res) => {
      try {
      if(await Toy.deleteMany()){
        res.json({ message: "Deleted Collection " });
      } else {
        res.status(400).json({ message: "Missing id" });
      }
      } catch (error) {
      res.status(400).json({ error: error.message });
      }
      });

      export default router





