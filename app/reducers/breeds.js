import { combineReducers } from 'redux';
import { FILTER_LIST, SET_DOG_LIST, CHANGE_ACTIVE_BREED, SAVE_DOG_PIC_URLS_TO_STATE } from 'actions/actions';

const data = (
  state = {
  },
  action
) => {
  let filteredList;
  switch (action.type) {

    case SET_DOG_LIST:
    // initializes data
      const dogList = action.payload;
      filteredList = action.payload;

      console.log("at reducer", action.payload)

      return {
          ...state,
          dogList,
          filteredList
    };
    case CHANGE_ACTIVE_BREED:
      const activeDogBreed = action.payload;
      return {
          ...state,
          activeDogBreed
    }


    case FILTER_LIST:
    const filter = action.payload;
    let filteredList = state.dogList.filter((item) => {
      console.log(item)
      return item.toLowerCase().search(
        filter.toLowerCase()) !== -1;
    });

    
    return {
        ...state,
        filteredList
        // uncomment when ready!
  }
  

    default:
      return state;
  }
};

export default data;
