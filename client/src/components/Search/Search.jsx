import React from "react"
import {useState,useEffect} from "react"
import "./Search.css";

function Search(){
    const[datas,setDatas] = useState([]) //'datas' is assigned a value but never used. 
    const[searchTerm,setSearchTerm] = useState("") //'datas' is assigned a value but never used. 
   
    useEffect(() =>{
        fetch('http://localhost:5000/toys')
        .then(response => response.json())
        .then(json => setDatas(json));
    }, []);

    const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
    // value.length > 2 && setSearchTerm(value);// si superieur a 2 on commence la recherche 
    }

    console.log(searchTerm)

    return(
        <> 
            <div classNam ="searchBar">
                <input
                type ="text" 
                name ="searchBar" 
                id="searchBar" 
                placeholder="Recherche"
                onChange={handleSearchTerm}
                />
            </div>
            <div className="search_results">
               {datas
               .filter((val) => {
                  return val.name.toLowerCase().includes(searchTerm.toLowerCase());
               })
               .map((val) => {
                    return (
                        <div className="search_result"key={val.id}>
                        {val.name}</div>   
                    );
                })}

            </div>

        </>

    );

}
export default Search;