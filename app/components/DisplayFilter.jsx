import React from "react";

import classNames from 'classnames/bind';
import styles from './scss/form';
const cx = classNames.bind(styles);

const DisplayFilter = (props) => {
 

  return (
    <div className="filter-list">
        <label>
        <input id="search_txt" type="text" placeholder="Search" onChange={ () => props.filterList()}/> 
        </label>
        </div>
  );
};

export default DisplayFilter;
