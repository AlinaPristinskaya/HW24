import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


function App() {

  const [data, setData] = useState({}); // State to store fetched data
  const [customMessage, setCustomMessage] = useState('');
  
  useEffect(() => {
    fetchData(); // Fetch data each time the component loads
    fetchMessage();
  }, []);
  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      /* Sends a GET request to
  'http://localhost:5000//api/data' (backend server) */
      const response = await axios.get("/api/data");
      setCustomMessage(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchMessage =async()=>{
     try {
      /* Sends a GET request to
  'http://localhost:5000//api/message' (backend server) */
      const response = await axios.get("/api/message");
      setData(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* Display the message, or 'Loading...' if data is not yet fetched*/}
        <h1>{data.message || "Loading..."}</h1>
        <h2>{customMessage.message || "Loading..."}</h2>
      </header>
    </div>
  );
}
export default App;
