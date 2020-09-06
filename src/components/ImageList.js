/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    // eslint-disable-next-line
    return <img src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
