import pantryReducer from './pantry';
import display from './display';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    pantry: pantryReducer,
    display: display
});

export default allReducers;