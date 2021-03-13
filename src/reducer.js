export const initialState={
    basket:[],
};
const reducer=(state,action)=>{
    switch(action.type){
        case 'add_to_basket':
            return {
                ...state,
                basket:[...state,action.item]
            };
            default:
                return state;
    }
};
export default reducer;