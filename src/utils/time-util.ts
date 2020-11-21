export class TimeUtil {
  fmt = {
    yyyy: (date: Date) => {
      return `${date.getFullYear()}`
    },
    MM: (date: Date) => {
      return `0${date.getMonth() + 1}`.slice(-2)
    },
    dd: (date: Date) => {
      return `0${date.getDate()}`.slice(-2)
    },
    hh: (date: Date) => {
      return `0${date.getHours()}`.slice(-2)
    },
    mm: (date: Date) => {
      return `0${date.getMinutes()}`.slice(-2)
    },
    ss: (date: Date) => {
      return `0${date.getSeconds()}`.slice(-2)
    }
  }

  priority = ['yyyy', 'MM', 'dd', 'hh', 'mm', 'ss']

  // formatTime(date: Date, formatString: string) {
  //   return this.priority.reduce((res, x) => res.replace(x, this.fmt.[x](date)), formatString)
  // }

  printFmt(date: Date) {
    const s = 'yyyy'
    console.log(this.fmt[s](date))
  }
}

enum DateType {
  yyyy,
  MM,
  dd,
  hh,
  mm,
  ss
}
