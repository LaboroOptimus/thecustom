import { GET_CURRENT_USER_SUCCESS, GET_CURRENT_USER_FAILURE, GET_CURRENT_USER_START } from '../actions/types'

interface CounterReducerType {
    counter: number;
    users: Object;
    loading: boolean;
    error: any;
}

const initialState: CounterReducerType = {
    counter: 0,
    loading: false,
    error: '',
    users: {},
}

const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_CURRENT_USER_START: {
            return { ...state, loading: true}
        }
        case GET_CURRENT_USER_FAILURE: {
            return { ...state, loading: false, error: action.payload }
        }
        case GET_CURRENT_USER_SUCCESS: {
            return { ...state, users: action.payload, loading: false }
        }
        default:
            return state
    }
}

export default counterReducer