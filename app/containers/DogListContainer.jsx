import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import styles from './scss/dogList.scss';
import DisplayButton from '../components/DisplayButton';
import DisplayFilter from '../components/DisplayFilter';
import { DisplaySelect } from '../components/DisplaySelect';

const cx = classNames.bind(styles);

const DogListContainer = ({ changeActiveBreed, dogFilteredList, activeDogBreed, filterList, imgURL }) => {

  // default content if axios is still fetching the file
  let dogList = <div> Loading...</div>
  if (!dogList) {
    return null 
  }
  if (dogFilteredList) {
     dogList = dogFilteredList.map( (doggoBreed) => {
      const title = doggoBreed[0].toUpperCase() + doggoBreed.substring(1);
      const img = imgURL[doggoBreed];

      console.log(imgURL, doggoBreed);

      return (
      <DisplayButton
        key={doggoBreed} breed={doggoBreed}
        handleClick={changeActiveBreed}
        isHighligthed={activeDogBreed === doggoBreed}
        img={img}
      >
        {title}
      </DisplayButton>) 
    })
  } else { 
      dogList = <div>Found nothing. Please try again.</div>
  };

  // if (imgURL[activeDogBreed]) {
  //   dogPics = imgURL[activeDogBreed].map( (pic) => {
  //     const key = pic.split('/');
  //     return (
  //     <DisplayPicture
  //     src={pic}
  //     key={key[key.length-1]}
  //     alt={key[key.length-1]}
  //     >

  //     </DisplayPicture>) 
  //   })
  // }

  return (
    <div className="doggo-container">
    <header>
    <h1>Dogs: What cats wish they could be</h1>
      <DisplayFilter filterList={filterList} />
    </header>
      {/* <DisplaySelect 
        options={dogFilteredList} 
        selected={activeDogBreed} 
        onChange={changeActiveBreed} 
      /> */}
      {dogList}
    </div>
  );
};

DogListContainer.PropTypes = {
  data: PropTypes.object,
  performSampleAction: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    dogFilteredList: state.breeds.filteredList,
    dogList: state.breeds.dogList,
    activeDogBreed: state.breeds.activeDogBreed,
    imgURL: state.pics.imgURL,
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

    filterList: () => {
      dispatch(actions.filterList(document.getElementById('search_txt').value));

    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogListContainer);
