import moment from 'moment'
const lang = window.navigator.userLanguage || window.navigator.language
moment.locale(lang)
const formatTimeToMinute = function (value) {
    if(value){
        return moment(value).format('YYYY_MM_DD')
    } else {
        return ''
    }
}

export default formatTimeToMinute