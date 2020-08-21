const pantryReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD': {
            state.push(action.pantry_item);
            return state;
        }
        case 'DEL': {
            state.splice(action.delete_idx,1);
            return state;
        }
        default:
            return state; //do nothing return pantry
    }
}

export default pantryReducer;