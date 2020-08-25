const pantryReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD': {
            var state_copy = [...state];
            state_copy.push(action.pantry_item);
            return state_copy;
        }
        case 'DEL': {
            var state_copy = [...state];
            state_copy.splice(action.delete_idx,1);
            return state_copy;
        }
        default:
            return state; //do nothing return pantry
    }
}

export default pantryReducer;