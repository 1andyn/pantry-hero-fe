const display = (state = 0, action) => {
    switch(action.type) {
        case "main": {
            state = 0;
            return state;
        }
        case "pantry": {
            state = 1;
            return state;
        }
        default:
            return state
    }
}

export default display;