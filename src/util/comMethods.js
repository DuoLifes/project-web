// 根據對象屬性去重數組
const comMethods = {
    DeDuplicationObjectArr: function(arr,key){
        let result = []
        let obj = {}
        for(let temp of arr){
            if(!obj[temp[key]]){
                result.push(temp)
                obj[temp[key]] = true
            }
        }
        return result
    }
}
export default comMethods
