import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import styles from './scss/dogList.scss';
import DisplayButton from '../components/DisplayButton';
import DisplayPicture from '../components/DisplayPicture';

const cx = classNames.bind(styles);

class DogPicsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeDogBreed, imgURL } = this.props;

    // default content if axios is still fetching the file
    let dogPics = <div> Loading...</div>

    if (imgURL[activeDogBreed]) {
      dogPics = imgURL[activeDogBreed].map( (pic) => {
        const key = pic.split('/');
        return (
        <DisplayPicture
        src={pic}
        key={key[key.length-1]}
        alt={key[key.length-1]}
        >

        </DisplayPicture>) 
      })
    } else { 
      return null 
    };
    console.log(dogPics)

    return (
      <div className={'dog-pictures'}>

        {dogPics}
   
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    dogs: state.breeds.dogList,
    activeDogBreed: state.breeds.activeDogBreed,
    imgURL: state.pics.imgURL
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeActiveBreed: (breed) => {
       dispatch(actions.changeActiveBreed(breed))
    },

    updateTitleAction: () => {
      dispatch(sampleActions.updateTitle('This is a different title'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogPicsContainer);
