import mongoose from "mongoose";


const categorieSchema = new mongoose.Schema({
    name:String,
});
//creation du modele categorie a partir du schema

export default mongoose.model("Categorie", categorieSchema );

  