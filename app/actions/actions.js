import axios from 'axios';

export const SET_DOG_LIST = 'SET_DOG_LIST';
export const CHANGE_ACTIVE_BREED = 'CHANGE_ACTIVE_BREED';
export const SAVE_DOG_PIC_URLS_TO_STATE = 'SAVE_DOG_PIC_URLS_TO_STATE';
export const FILTER_LIST = 'FILTER_LIST';


export const fetchDogList = () => {
  return (dispatch, getState) => {
    axios.get('https://dog.ceo/api/breeds/list').then(res => {
      dispatch(setDogList(res.data.message))
      res.data.message.forEach(breed => {
        dispatch(fetchDogImgSrc(breed))
      })
    })
  };
};

// initial list
export const setDogList = dogList => {
  // const filteredList = dogList.slice(0, 12);
  return ({
    type: SET_DOG_LIST,
    payload: dogList,
  })
};

export const changeActiveBreed = (breed_name) => ({
  type: CHANGE_ACTIVE_BREED,
  payload: breed_name,
});

export const filterList = (filter) => {
  console.log("@ACTIONS", filter)
  return ({
    type: FILTER_LIST,
    payload: filter,
  })
};


export const fetchDogImgSrc = (breed_name) => {
  console.log(breed_name);
  return (dispatch, getState) => {
    axios.get(`https://dog.ceo/api/breed/${breed_name}/images`).then(res => {
      const pictures = res.data.message.slice(0, 20);
      dispatch(setDogPicURLToState(breed_name, pictures));
    });
  };
};


export const setDogPicURLToState = (breed_name, pictures) => ({
  type: SAVE_DOG_PIC_URLS_TO_STATE,
  payload: {
    breed: breed_name,
    pictures: pictures
  }
});