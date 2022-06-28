'use strict'

import express from 'express'
 // en utilisant la syntaxe moderne de Js (ESModule) -> attention à ajouter le "type":"module" dans package.json
// const port = process.env.PORT || 3000;
const port =3000
import toysRoutes from './routes/toys.js';
import categoriesRoutes from './routes/categories.js';
import mongoose from 'mongoose'
// const uri = process.env.ATLAS_url;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/toys",toysRoutes )
app.use("/categories",categoriesRoutes )

app.get("/",(resq,res) => {
  console.log("bienvenue sur la page d'acceuil");
  })
  
app.listen(port, () => {
  mongoose.connect('mongodb+srv://TokenAlpha:GtPkohHwZt9drVi9@cluster0.zcmvm.mongodb.net/Santa-magical-world?retryWrites=true&w=majority')
  .then(()=>console.log('Connexion à MongoDB réussie !')) 
  .catch(err => console.log("Error Connexion"))
 // console.log('express start at http://localhost:${port}')
})

















