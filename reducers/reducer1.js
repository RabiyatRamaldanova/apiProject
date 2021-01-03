export const initialState = {
    title: "shrek", 
    arrayOfData: [],
};

function reducer1(state = initialState, action) {
    switch (action.type) {
        case 'SET_TITLE':
            return{
                title: action.payload
            };
        case 'SET_ARRAY':
            return{
                ...state,
                arrayOfData: action.payload.arrayOfData,
            };
        default:
        return state;
    }
}
export default reducer1;