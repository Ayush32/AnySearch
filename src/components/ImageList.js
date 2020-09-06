/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import "./ImageList.css";
import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    // eslint-disable-next-line
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
