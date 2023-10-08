// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "./QuoteCard";
import AdditionalContent from "./AdditionalContent";
import SocialShare from "./SocialShare";

function App() {
  const [quoteData, setQuoteData] = useState({ quote: "", author: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/quotes",
          {
            headers: {
              "X-Api-Key": "your_api_key_here",
            },
          }
        );
        const { quote, author } = response.data[0];
        setQuoteData({ quote, author });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <QuoteCard quote={quoteData.quote} author={quoteData.author} />
      <SocialShare quote={quoteData.quote} author={quoteData.author} />
      <AdditionalContent />
    </div>
  );
}

export default App;
