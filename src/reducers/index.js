import pantryReducer from './pantry';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    pantry: pantryReducer
});

export default allReducers;