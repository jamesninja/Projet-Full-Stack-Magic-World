import React ,{ Fragment,useState,useEffect } from "react";
import axios from 'axios';

function CategoriesList(){
  const [data,setData] = useState([]);

  const fetchData = async () => {
    const result = await axios( 'http://localhost:5000/categories',
    );
    setData(result.data);
    console.log(result)
  };

  // similaire à "componentDidMount" et "componentDidUpdate"
  useEffect(() => {
    fetchData();
  },[])

  return(
    <Fragment>
      <ul>
        {data.map(item =>{
          return (
                <li key={item.id}>
                    <p>{item.name}</p>
                </li>
                )
        })}
      </ul>
    </Fragment>
  )
}
export default CategoriesList;



