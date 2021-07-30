import React from "react";

import classNames from 'classnames/bind';
import styles from './scss/buttons';
const cx = classNames.bind(styles);

const DisplayButton = props => {
  let className;
  if (props.isHighligthed) {
    className = "btn_highligthed";
  } else {
    className = "btn_default";
  }


  return (
    <button
      id = {props.breed}
      onClick={() => {
         props.handleClick(props.breed)
        }}
      className={className}
    >
      {props.children}
    </button>
  );
};

export default DisplayButton;
