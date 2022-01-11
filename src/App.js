import React, { useEffect, useState } from "react"; 
import ReactDOM, { findDOMNode } from 'react-dom';
import axios from 'axios'

function App() {

  const [posts, setPosts] = useState([])  //use to set postal codes
  const [city, setCity] = useState();  //used to set cities
  let url = "http://ctp-zip-api.herokuapp.com/city/"; 

  function handleChange (event)  { 
    setCity(event.target.value); //set city in realtime
  }

const fetchPost = async () => {
    url+= city; //url addss zipcode at the end fo it 
    url=url.toUpperCase(); 
    console.log(url); 

    const response = await axios(url) //response equals fetching url
    console.log(response.data) //console.log response data
    setPosts(response.data) //set postals to the data

    const cityRender = posts.map((post) =>
  <li>{post}</li>
);


    ReactDOM.render(<ul>{cityRender}</ul>, document.getElementById("zip"))
  }
  

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <h1>The Zip and City search API</h1>
      <p>Please enter a City:</p> 
      <input className="cityEntry" onChange={handleChange}></input> 
      <button onClick={fetchPost} style={{margin: "0px 10px"}}>enter</button>

      <p id="zip"></p>

      


      </header>
    </div>
  );
}

export default App;
