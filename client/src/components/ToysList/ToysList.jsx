import React ,{ Fragment,useState,useEffect } from "react";
import axios from 'axios';

function ToysList(){
  const [data,setData] = useState([]);

  const fetchData = async () => {
    const result = await axios( 'http://localhost:5000/toys',
    );
    setData(result.data);
    console.log(result)
  };

  // similaire à "componentDidMount" et "componentDidUpdate"
  useEffect(() => {
    fetchData();
  },[])

  return(
    <>
      <ul>
        {data.map(item =>{
          return (
                <li key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.descriptif}</p>
                    <p>{item.price}</p>
                </li>
                )
        })}
      </ul>
    </>
  )
}
export default ToysList;



