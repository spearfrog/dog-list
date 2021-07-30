import { combineReducers } from 'redux';
import { SAVE_DOG_PIC_URLS_TO_STATE } from 'actions/actions';

const data = (
  state = {
    imgURL: {}
  },
  action
) => {
  switch (action.type) {

    
    case SAVE_DOG_PIC_URLS_TO_STATE:
  
        const {breed, pictures} = action.payload;
        const copyofImgURL = Object.assign(state.imgURL);
        copyofImgURL[breed] = pictures;

      return {
          ...state,
          imgURL : copyofImgURL 
          
    };


    default:
      return state;
  }
};

export default data;
