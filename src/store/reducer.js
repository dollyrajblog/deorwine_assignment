import { ADD,SUB } from "./actionType";

const initialState={
    counter:0
};
export const mainReducer=(state=initialState,action)=>{
    switch (action.type)
    {
        case ADD:
            return {...state,counter:state.counter+1};
        case SUB:
            return {...state,counter:state.counter-1};    
        default:
           return state;    
    }
}