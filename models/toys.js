import mongoose from "mongoose";

const toySchema =new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    categorie_id:Number
    //category:    { type: mongoose.Schema.Types.ObjectId, ref:'Category' }
  })
  
  //creation du modele toy a partir du schema
  export default mongoose.model("Toy", toySchema);