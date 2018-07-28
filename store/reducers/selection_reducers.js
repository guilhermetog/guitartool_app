import {SELECT_CAPO, SELECT_KEY_INDEX} from '../actions/types';

const INITIAL_STATE = {
    selectedKeyIndex: 0,
    selectedCapo: 7,
    capoKeyIndex: 7
}

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case SELECT_KEY_INDEX:
            return {
                ...state,
                selectedKeyIndex: action.payload,
                capoKeyIndex: calculateCapoKey(state.selectedCapo, action.payload)
            }
        case SELECT_CAPO:
            return {
                ...state,
                selectedCapo: action.payload,
                capoKeyIndex: calculateCapoKey(state.selectedKeyIndex, action.payload)
            }
        default:
            return state
    }
}


const calculateCapoKey = (state, payload) => {
    let ck = state + payload;
    return ck >= 12? ck - 12 : ck;   
}