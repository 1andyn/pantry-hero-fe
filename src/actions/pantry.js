export function setIngredients(items) {
    return {
        type: "SET",
        state: items,
    };
}

export function addIngredient(item) {
    return {
        type: "ADD",
        pantry_item: item,
    };
}

export function delIngredient(index) {
    /* May want to do search logic in here which will change parameters*/
    return {
        type: "DEL",
        delete_idx: index,
    };
}

export default { setIngredients, addIngredient, delIngredient };
