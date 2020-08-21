function addIngredient(item) {
    return {
        type: 'ADD',
        pantry_item: item
    }
}

function delIngredient(index) {
    /* May want to do search logic in here which will change parameters*/
    return {
        type: 'DEL',
        delete_idx: index
    }
}

export default {addIngredient, delIngredient};