
import React from "react";
import ToysList from './components/ToysList/ToysList';
import EditToys from './components/ToysList/EditToys';

function App(){
  return(
    <>
     <div >Les Jouets</div>
     <ToysList className ='to-toys-list'/>
     <EditToys className ='to-edit-toys'/>
    </>
  )
}
export default App;