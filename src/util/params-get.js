export default (data) => {
    let str = ''
    for(let k in data) {
        if(data[k]){
            str += `&${k}=${encodeURI(data[k])}`
        }
    }
    if(str) {
        str = '?' + str.substring(1)
    }
    return str
}