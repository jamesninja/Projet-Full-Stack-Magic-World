
    import  express  from "express";
    import mongoose from "mongoose";
    const router = express.Router();
    // import Toy from "../models/toys.js"
    import Categorie from "../models/categories.js"

    // **Create**///////////////////////////////////////////////////////////////////////////
    router.post("/", async (req, res) => {
    try {
      const newCategorie = new Categorie({
        name: req.body.name,
      });
      await newCategorie.save();
      res.json({ message: "Created" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
    });
  
      //**ReadAll**////////////////////////////////////////////////////////////////////////
      router.get("/", async (req, res) => {
      try {
        const categories = await Categorie.find();
        res.json(categories);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      });

      //**ReadId**/////////////////////////////////////////////////////////////////////////
      router.get("/:id", async (req, res) => {
      try {
      const categories = await Categorie.findById(req.params.id);
      res.json(categories);
      } catch (error) {
      res.status(400).json({ error: error.message });
      }
      });

      // **Update**//////////////////////////////////////////////////////////////////////////
      router.put('/:id', async (req, res) => {
      try {
        if (req.body.name) {
          const categorie= await Categorie.findByIdAndUpdate(req.params.id,{name:req.body.name});
          await categorie.save();
          res.json({ message: "Updated" });
        } else {
          res.status(400).json({ message: "Missing parameter" });
      }
      } catch (error) {
      res.status(400).json({ error: error.message });
      }
      });

      // **DeleteId**//////////////////////////////////////////////////////////////////////////
      router.delete('/:id', async (req, res) => {
      const id = req.params.id;

      try {
      if(await Categorie.findByIdAndDelete({_id:req.params.id})){
        res.json({ message: "Removed" });
      } else {
        res.status(400).json({ message: "Missing id" });
      }
      } catch (error) {
      res.status(400).json({ error: error.message });
      }
      });

      // **DeleteAll**//////////////////////////////////////////////////////////////////////////
      router.delete('/', async (req, res) => {
      try {
      if(await Categorie.deleteMany()){
        res.json({ message: "Deleted Collection " });
      } else {
        res.status(400).json({ message: "Missing id" });
      }
      } catch (error) {
      res.status(400).json({ error: error.message });
      }
      });

      export default router


