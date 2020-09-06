/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    // eslint-disable-next-line
    return <ImageCard key={id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
