import { SET_PATH } from "../types"

export const setPath = (path:string) => {
    return {
        type: SET_PATH,
        payload: path
    }
}