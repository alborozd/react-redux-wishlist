import { LOAD_CATEGORIES, LOAD_CATEGORY, START, SUCCESS, FAIL } from "../constants";

const defaultState = {
    loading: false,
    entities: [],
    currentCategory: {}
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
        
        case LOAD_CATEGORY + START: 
            return {...state, loading: true };

        case LOAD_CATEGORY + SUCCESS:
            return { ...state, loading: false, currentCategory: payload.category };
        
        case LOAD_CATEGORY + FAIL:
            return { ...state, loading: false, error: payload };

    }

    return state
}