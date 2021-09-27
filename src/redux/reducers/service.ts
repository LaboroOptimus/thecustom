import { SET_PATH } from '../actions/types'

const initialState = {
    currentPath: '/'
}

const serviceReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PATH: {
            return { ...state, currentPath: action.payload}
        }
        default:
            return state
    }
}

export default serviceReducer