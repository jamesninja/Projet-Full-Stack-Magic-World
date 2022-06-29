'use strict'
import {} from 'dotenv/config'
import express from 'express'
import cors from 'cors'
 // en utilisant (import from) la syntaxe moderne de Js (ESModule) -> attention à ajouter le "type":"module" dans package.json
// const port = process.env.PORT || 3000;

import toysRoutes from './routes/toys.js';
import categoriesRoutes from './routes/categories.js';
import mongoose from 'mongoose'

const app = express();
const PORT = 5000
// const PORT = process.env.PORT || 5000

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/toys",toysRoutes )
app.use("/categories",categoriesRoutes )

app.get('/', (req, res) => {
  res.send('Hello World!')
})
    
app.listen(PORT, () => {
  // mongoose.connect(process.env.DB)
  mongoose.connect('mongodb+srv://TokenAlpha:GtPkohHwZt9drVi9@cluster0.zcmvm.mongodb.net/Santa-magical-world?retryWrites=true&w=majority')
  .then(()=>console.log('Connexion à MongoDB réussie !')) 
  .catch(err => console.log("Error Connexion"))
 console.log('express start at http://localhost:${PORT}')
})

















