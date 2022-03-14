const pantryReducer = (state = [], action) => {
    switch (action.type) {
        case "SET": {
            return action.state;
        }
        case "ADD": {
            console.log("ACTION: ", action);
            return [...state, action.pantry_item];
        }
        case "DEL": {
            var state_copy = [...state];
            state_copy.splice(action.delete_idx, 1);
            return state_copy;
        }
        default:
            return state; //do nothing return pantry
    }
};

export default pantryReducer;
