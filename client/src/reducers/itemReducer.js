import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';


const initialState = {
    items: [
        { id: uuidv4(), name: 'Eggs'},
        { id: uuidv4(), name: 'Milk'},
        { id: uuidv4(), name: 'Steak'},
        { id: uuidv4(), name: 'Candy'}
    ]
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        break;
        default:
            return state;
    }
}
