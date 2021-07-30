import React from "react";

import classNames from 'classnames/bind';
import styles from './scss/buttons';
const cx = classNames.bind(styles);

const DisplayButton = props => {
  


  return (
    <img
      id = {'img_' + props.children}
      src = {props.src}
      alt = {props.alt}
    />
  );
};

export default DisplayButton;
