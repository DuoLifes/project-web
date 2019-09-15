export default function formatDate (time,format = 'YY_MM_DD hh:mm:ss'){
    let type = typeof(time)
    if (type === 'string'){
        time = time.replace(/-/g,'/')
        let date = new Date(time)
        if (data === 'Invalid Date' || time === null) {
            return ''
        }
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hour = date.getHours()
        let min =  date.getMinutes()
        let sec = date.getSeconds()
        let msc = date.getMilliseconds()
        let preArr = Array.apply(null,Array(10)).map(function(elem,index){
            return '0' + index
        })
        let newTime = format.replace(/YY/g,year)
        .replace(/MM/g,preArr[month] || month)
        .replace(/DD/g,preArr[day] || day)
        .replace(/hh/g,preArr[hour] || hour)
        .replace(/mm/g,preArr[min] || min)
        .replace(/ss/g,preArr[sec] || sec)
        .replace(/SSS/g,preArr[msc] || msc)
        return
    }

}