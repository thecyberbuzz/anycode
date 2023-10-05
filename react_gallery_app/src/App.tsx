import { useState } from "react";
import ImageCard from "./components/ImageCard";
import UploadIcon from "./assets/UploadIcon.svg";
import "./index.css";
import { Link } from "react-router-dom";

function App() {
  const [images, _] = useState([
    {
      Title: "Golden World",
      ImageUrl: "https://picsum.photos/200/",
      Description: "",
      Date: "04-01-2023",
    },
    {
      Title: "Golden World",
      ImageUrl: "https://picsum.photos/201/",
      Description: "",
      Date: "02-01-2023",
    },
    {
      Title: "olden World",
      ImageUrl: "https://picsum.photos/202/",
      Description: "",
      Date: "04-01-2023",
    },
    {
      Title: "Golden Wrld",
      ImageUrl: "https://picsum.photos/203/",
      Description: "",
      Date: "04-01-2023",
    },
    {
      Title: "Gold World",
      ImageUrl: "https://picsum.photos/200/",
      Description: "",
      Date: "04-01-2023",
    },
    {
      Title: "Golden World",
      ImageUrl: "https://picsum.photos/20/",
      Description: "",
      Date: "04-01-223",
    },
    {
      Title: "Golden World",
      ImageUrl: "https://picsum.photos/206/",
      Description: "",
      Date: "04-1-2023",
    },
    {
      Title: "Golden World",
      ImageUrl: "https://picsum.photos/2007/",
      Description: "",
      Date: "04-01-2023",
    },
    {
      Title: "Golden Worl",
      ImageUrl: "https://picsum.photos/208/",
      Description: "",
      Date: "04-01-2023",
    },
    {
      Title: "Golden World",
      ImageUrl: "https://picsum.photos/209/",
      Description: "",
      Date: "04-01-2023",
    },
  ]);

  return (
    <div className="container mx-auto">
      <div className=" m-16 flex-row align-center text-center">
        <Link to="/upload">
          <h1 className="flex-1 inline font-bold p-4 to-blue-700 cursor-pointer">
            UPLOAD
          </h1>
          <img
            className="flex-1 inline w-9 h-9 cursor-pointer"
            src={UploadIcon}
            alt="uploadIcon"
          />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
