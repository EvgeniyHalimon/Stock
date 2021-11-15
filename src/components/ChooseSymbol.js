import React, { useEffect } from 'react';
import { Container, InputGroup, Alert, Button, Form } from 'react-bootstrap';
import axios from "axios"
import MarketChart from './MarketChart';
import CandleStickChart from './CandleStickChart';
import MarketStore from '../store/MarketStore';
import { observer } from 'mobx-react-lite';
import CompanyCard from './CompanyCard';
import {DebounceInput} from 'react-debounce-input'

const store = new MarketStore()

const handleSubmit = (e) => {
    e.preventDefault()
    store.changeUrl(store.symbol)
    store.changeOverviewUrl(store.symbol)
}

const API_KEY = 'TCJ4L6MNRZLNYVCB'
const API_KEY2 = 'CK2AX9U5OBXBGT49'

async function getData(symbol){
    const market = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
    console.log(market)
    const marketArr = []
    const ref = market.data['Time Series (Daily)']
    const refKeys = Object.keys(ref)
    refKeys.forEach(item => {
        marketArr.push(ref[item])
    })
    marketArr.forEach((item ,index)=> {
        item.date = refKeys[index]
    })
    store.setChartData(marketArr)
}

async function getCompany(symbol){
    const company = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY2}`)
    console.log(company.data);
    store.setDataCompany(company.data)
} 

function ChooseSymbol(){
    useEffect(() => {
        getData(store.symbol)
        getCompany(store.symbol)
    },[store.url, store.overviewUrl])

    store.chartData.slice().sort((a, b) => {
        if (a.date > b.date) {
        return 1
        }
        if (a.date < b.date) {
        return -1
        }
        return 0
    })

    const series = [{data: []}]
    const timeSeries = [{name: store.companyData.Name, data: []}]

    store.chartData.forEach(item => {
        series[0].data.push({
                    x: item.date,
                    y: [item['1. open'], item['2. high'], item['3. low'], item['4. close']]
        })
        timeSeries[0].data.push(
            {x: item.date, y : item['4. close']}
        )
    })

    console.log(timeSeries);

    return(
        <Container>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <DebounceInput
                            className='form-control'
                            debounceTimeout={3000}
                            value={store.symbol}
                            type='text'
                            onChange={(e) => store.insertSymbol(e.target.value)}
                        />
                        <Button
                            variant='warning'
                            type='submit'
                        >
                            Get
                        </Button>
                    </InputGroup>
                </Form>
            <Container style={{display: 'flex'}}>
                    <CompanyCard data={store.companyData}/>
                    <Container>
                        <MarketChart series={timeSeries}/>
                        <CandleStickChart series={series}/>
                    </Container>
                </Container>
        </Container>
    )
}

export default observer(ChooseSymbol)

