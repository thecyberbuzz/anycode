import React from "react";

const SocialShare = ({ quote, author }) => {
  const shareOnTwitter = () => {
    const tweetText = `"${quote}" - ${author}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Share on Social Media</h3>
      <button onClick={shareOnTwitter}>Share on Twitter</button>
    </div>
  );
};

export default SocialShare;
