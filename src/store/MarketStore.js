import { action, makeObservable, observable } from 'mobx';

const API_KEY = 'TCJ4L6MNRZLNYVCB'
const API_KEY1 = 'PDJ983JYNUOH4MXU'
const API_KEY2 = 'CK2AX9U5OBXBGT49'
const API_KEY3 = 'HOM3EVBH2OXLJG20'
export default class MarketStore{
    symbol = 'AAPL'
    chartData = []
    companyData = {}
    url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=${API_KEY}`
    overviewUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=${API_KEY1}`

    insertSymbol(value){
        this.symbol = value
    }

    changeUrl(data){
        this.url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${data}&apikey=${API_KEY2}`
    }

    changeOverviewUrl(data){
        this.overviewUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${data}&apikey=${API_KEY3}`
    }

    setDataCompany(data){
        this.companyData = data
    }

    setChartData(data){
        this.chartData = data
    }

    constructor(){
        makeObservable(this,{
            symbol: observable,
            url: observable,
            overviewUrl : observable,
            chartData: observable.shallow,
            companyData: observable.shallow,
            insertSymbol: action.bound,
            changeUrl: action.bound,
            changeOverviewUrl : action.bound,
            setDataCompany: action.bound,
            setChartData: action.bound
        })
    }
}
