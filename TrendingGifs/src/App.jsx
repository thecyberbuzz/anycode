// src/App.js
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = "your_api_key_here";
      try {
        const response = await axios.get(
          `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
        );
        setGifs(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <h1 style={{textAlign: "center"}}>Trending Gifs</h1>
        </Grid>
        {gifs.map((gif) => (
          <Grid item md={4} key={gif.id} className="gif">
            <img
              src={gif.images.fixed_height.url}
              alt={gif.title}
              style={{ width: "300px", marginLeft: "70px" }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
