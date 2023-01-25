const time = 3000
const time2 = 1000
const finished = () => console.log("timee end")
setTimeout(finished, time)

const interval = () => console.log("intervaloo")
const int = setInterval(interval, time2)

setTimeout(() =>clearInterval(int), 6001)