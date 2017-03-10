import { LOAD_WISHES, START, SUCCESS, FAIL } from "../constants";

const defaultState = {
    loading: false,
    entities: []
}

export default (state = defaultState, action) => {
    const { type, payload, error } = action

    switch (type) {
       case LOAD_WISHES + START: 
            return { ...state, loading: true };
        
        case LOAD_WISHES + SUCCESS: 
            return { ...state, loading: false, entities: payload.wishes };
            
        case LOAD_WISHES + FAIL: 
            return { ...state, loading: false };
            
    }

    return state
}