export const cutString = (string:string, n:number) => {

    if(string.length > n){
        return string.substr(0, n) + '...'
    }
    return string
}