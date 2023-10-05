import React from 'react'

interface Props {
  image: {
    ImageUrl: string;
    Title: string;
  }
}

const ImageCard: React.FC<Props> = ({ image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.ImageUrl} alt="" className="w-full"/>
      <div className="ps-6 py-4">
        <ul>
          <li>
            <strong>
              Title:
            </strong>
            &nbsp; {image.Title}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ImageCard;