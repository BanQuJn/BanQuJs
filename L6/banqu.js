// 补零
function repairZero(num) {
    return num < 10 ? ('0' + num) : num
}

// 倒计时
function countdown(stime) {
    setInterval(() => {
        let time = new Date()
        let end = new Date(stime)
        let sec = (end - time) / 1000
        let h = repairZero(Math.floor(sec / 3600));
        let m = repairZero(Math.floor((sec % 3600) / 60));
        let s = repairZero(Math.floor((sec % 3600) % 60));
        console.log([h, m, s].join(':'));
    }, 1000);
}

// 时间格式转换方法
function getChinaTimeText(stime, type) {
    let now = new Date()
    if (stime) now = new Date(stime)
    let yy = repairZero(now.getFullYear())
    let mm = repairZero(now.getMonth() + 1)
    let dd = repairZero(now.getDate())
    let ymd = [yy, mm, dd].join('-')
    let hh = repairZero(now.getHours())
    let mi = repairZero(now.getMinutes())
    let ss = repairZero(now.getSeconds())
    let hms = [hh, mi, ss].join(':')
    // let time = ymd.join('-') + ' ' + hms.join(':')
    let time = [ymd, hms].join(' ')
    if (type === 0) return ymd
    else if (type === 1) return hms
    else return time
}

// 时间更新间隔
function getFriendlyTime(time) {
    let nowTime = new Date()
    let sendTime = new Date(time)
    let sec = (nowTime - sendTime) / 1000
    if (sec < 60) {
        console.log('刚刚');
    } else if (sec < 60 * 60) {
        console.log(Math.floor(sec / 60) + "分钟前");
    } else if (sec < 60 * 60 * 24) {
        console.log(Math.floor(sec / 60 / 60) + "小时前");
    } else {
        getChinaTimeText(sendTime)
    }
}

// 翻转字符串
function reverseStr(str) {
    return str.split('').reverse().join('')
}

// 打印
function log(str) {
    console.log(str);
}

// 取随机数
function randomNum(max, min) {
    return Math.round(Math.random() * (max - min)) + min
}

// 获取页码
function getPageList(pageIndex, pageSize) {
    console.log('共有' + Math.ceil(arr.length / pageSize) + '页');
    let start = (pageIndex - 1) * pageSize
    let end = start + pageSize
    console.log(arr.slice(start, end));
}

// 字符串转对象
function parse(str) {
    let obj = {}
    let args = str.split('&')
    args.forEach(item => {
        let kv = item.split('=')
        let key = kv[0]
        let val = kv[1]
        obj[key] = val
    });
    return obj
}

// 对象转字符串
function stringify(obj) {
    let arr = []
    for (let key in obj) {
        let val = obj[key]
        let str = [key, val].join('=')
        arr.push(str)
    }
    return arr.join('&')
}