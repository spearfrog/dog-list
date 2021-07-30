import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import * as actions from '../actions/actions';
import DogListContainer from 'containers/DogListContainer';
import DogPicsContainer from 'containers/DogPicsContainer';

import classNames from 'classnames/bind';
import styles from './scss/base-page';
const cx = classNames.bind(styles);

const BasePage = ({ imgURL }) => {

  useEffect(() => {
  }, [imgURL]);

  return (
    <div className={cx('base-page')}>
      <DogListContainer imgURL={imgURL} />
      <DogPicsContainer />
    </div>
 );
}

export default connect(mapStateToProps, null)(BasePage);
// export default BasePage;

function mapStateToProps(state) {
  return {
    imgURL: state.pics.imgURL,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchDogList: () => {
//       console.log('Dog list fetched');
//       dispatch(actions.fetchDogList());
//     }
//   };
// }