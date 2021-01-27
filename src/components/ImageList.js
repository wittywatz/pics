import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ({ images }) => {
  const picture = images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });
  return <div className="image-list">{picture}</div>;
};

export default ImageList;
