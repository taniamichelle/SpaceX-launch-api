import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions';

export const initialState = {
    data: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: ''
            }
        default:
            return state;
    }
}