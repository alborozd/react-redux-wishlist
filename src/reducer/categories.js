import { LOAD_CATEGORIES, START, SUCCESS, FAIL } from "../constants";

const defaultState = {
    loading: false,
    entities: []
}

export default (state = defaultState, action) => {
    const { type, payload, error } = action

    switch (type) {
       case LOAD_CATEGORIES + START: 
            return { ...state, loading: true };
        
        case LOAD_CATEGORIES + SUCCESS: 
            return { ...state, loading: false, entities: payload.categories };
            
        case LOAD_CATEGORIES + FAIL: 
            return { ...state, loading: false };
            
    }

    return state
}