import React, { useState, useEffect } from "react";
import "./index.css";
 
function FetchData() {
  const [data, setData] = useState([]);
 const [error, setError] = useState("")
  
 useEffect(() => {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) => console.error("Error fetching data:", error));
}, []); 
if(error){
  return <h2>{error}</h2>
}
  return (
<div className="container">
<h1>Player List</h1>

</div>
  );
}
 
export default FetchData;

