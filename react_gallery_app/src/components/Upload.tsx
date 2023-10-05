import React, { useState } from "react";
import "../index.css";

const Upload: React.FC = () => {
  const [Title, setTitle] = useState<string>("");
  const [Description, setDes] = useState<string>("");
  const [DateTaken, setDate] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleSubmit(event : React.FormEvent) {
    event.preventDefault();
  }

  return (
      <div className="p-10 w-full max-w-lg ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
          <label className="block text-grey-700 text-lg font-bold mb-2" >
            TITLE  
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading0-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="title"
            placeholder="title"
            value={Title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
          </div>
          <div className="mb-6">
          <label className="block text-grey-700 text-lg font-bold mb-2">
            DESCRIPTION
          </label> 
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-normal focus:outline-none focus:shadow-outline"
            type="text"
            id="des"
            placeholder="Describe the Image "
            value={Description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDes(e.target.value)
            }
          />
          </div>
          <div className="mb-6">
          <label className="block text-grey-700 text-sm font-bold mb-1">
            Date 
          </label>
          <input
            type="date"
            value={DateTaken}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDate(e.target.value)
            }
          />
         </div> 
         <div className="mb-6">
          <label className="block text-grey-700 text-sm font-bold mb-2">
          Select image 
          </label>
          <input  
            type="file" className=" my-2"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSelectedFile(e.target.files && e.target.files[0])
            }
          />
          </div>
         <div className="mb-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onSubmit={handleSubmit}>
           Upload
          </button>
          </div>
        </form>
      </div>
    );
  
}

export default Upload;
