import { SET_FILTER } from '../actions/types'

const initialState = {
    filter: 0
}

const goodsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_FILTER: {
            return { ...state, filter: action.payload}
        }
        default:
            return state
    }
}

export default goodsReducer