import React, { useState, useEffect } from "react";
import "./index.css";
 
function New() {
  const [data, setData] = useState([]);
 const [error, setError] = useState("")
  
 useEffect(() => {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => setError("Error fetching data:", error));
}, []); 
if(error){
  return <h2>{error}</h2>
}
  return (
<div className="container">
<h1>Player List</h1>

<ul className="card-list">
        {data.map((player) => (
<li key={player.id} className="card">
<h2>{player.name}</h2>
<p>{player.age}</p>
</li>
        ))}
</ul>

</div>
  );
}
 
export default New;

