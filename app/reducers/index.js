import { combineReducers } from 'redux';

import breeds from 'reducers/breeds';
import pics from 'reducers/pics';

// 
const rootReducer = combineReducers({
  breeds,
  pics,
  
});

export default rootReducer;
