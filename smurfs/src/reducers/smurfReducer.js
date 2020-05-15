import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    POST_SMURF_START, 
    POST_SMURF_SUCCESS 
} from '../actions/smurfAction';

const initialState = {
    isFetching: false,
    smurfs: [],
    addingSmurf: false
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case POST_SMURF_START:
            return {
                ...state,
                isFetching: true,
            }
        case POST_SMURF_SUCCESS:
            const newSmurf = {
                name: '',
                age: '',
                height: '',
            }
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            }
        default:
            return state
    }
}