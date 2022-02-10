export default class Countdown{
    constructor(futureDate){
        this.futureDate = futureDate
    }
    get _actualDate(){
        return new Date()
    }
    get _futureDate(){
        return new Date(this.futureDate)
    }
    get _timeStampDiff(){
        return this._futureDate.getTime() - this._actualDate.getTime()
    }
    get days(){
        const dias = this._timeStampDiff / (24 * 60 * 60 *1000)
        return Math.floor(dias)
    }
    get hours(){
        const hours = this._timeStampDiff / (60 * 60 * 1000)
        return Math.floor(hours)
    }
    get minutes(){
        const minutes = this._timeStampDiff / (60 * 1000)
        return Math.floor(minutes)
    }
    get seconds(){
        const sec = this._timeStampDiff / 1000
        return Math.floor(sec)
    }
    get total(){
        const days = this.days
        const hours = this.hours % 24
        const minutes = this.minutes % 60
        const seconds = this.seconds % 60
        return {
            days,
            hours,
            minutes,
            seconds
        }
    }
}