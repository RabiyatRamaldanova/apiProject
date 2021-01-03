export const initialState = {
    arrayOfFavorite: [],
    //isFavorite: false,
};

function reducer2(state = initialState, action) {
    switch (action.type) {
        case 'SET_FAVORITE_ARRAY':
            return {
                //...state,
                arrayOfFavorite: [...state.arrayOfFavorite, action.payload]
            }

            // case 'SET_BOOLEAN':
            //     return {
            //         isFavorite: action.payload,
            //     }
        default:
        return state;
    }
}
export default reducer2;