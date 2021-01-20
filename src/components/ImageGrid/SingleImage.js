import React, {useState} from 'react';

const SingleImage = ({image}) => {
  const [zoom, setZoom] = useState(false);
  const handleZoom = status => {
    setZoom(status);
  };
  return (
    <img
      src={image}
      onMouseOut={() => handleZoom(false)}
      onClick={() => handleZoom(true)}
      alt=""
      className={zoom ? 'zoomIn' : ''}
    />
  );
};

export default SingleImage;
