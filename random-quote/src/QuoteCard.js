import React from "react";

const QuoteCard = ({ quote, author }) => {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Random Quote of the Day</h2>
      <p>{quote}</p>
      <p>- {author}</p>
    </div>
  );
};

export default QuoteCard;
