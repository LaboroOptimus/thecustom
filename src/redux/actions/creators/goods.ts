import { SET_FILTER } from "../types"

export const setGoodsFilter = (id:number) => {
    return {
        type: SET_FILTER, 
        payload: id
    }
}