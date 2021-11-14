import React from 'react';
import { Card } from 'react-bootstrap';

function CompanyCard({data}){
    return( 
        <Card style={{ width: '18rem', height: '10%' }}>
                <Card.Body>
                    <Card.Title><strong>{data.Name}</strong></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <strong>{data.Symbol}</strong>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Highest price on this week</strong><br/>
                        <em className='company-info '>{data['52WeekHigh']}</em>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Lowest price in this week</strong><br/>
                        <em className='company-info '>{data['52WeekLow']}</em>
                    </Card.Subtitle>
                        
                    <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Market capitalization</strong><br/>
                        <em className='company-info text-muted'>{data.MarketCapitalization}</em>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Price earnings ratio</strong><br/>
                        <em className='company-info text-muted'>{data.PERatio}</em>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Earnings per share</strong><br/>
                        <em className='company-info text-muted'>{data.EPS}</em>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Profit margin</strong><br/>
                        <em className='company-info text-muted'>{data.ProfitMargin}</em>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Analyst target price</strong><br/>
                        <em className='company-info text-muted'>{data.AnalystTargetPrice}</em>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2">
                                <strong className='company-info'>Shares outstanding</strong><br/>
                                <em className='company-info text-muted'>{data.SharesOutstanding}</em>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Dividend yield</strong><br/>
                        <em className='company-info text-muted'>{data.DividendYield}</em>
                    </Card.Subtitle>
                     <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Devidends per share</strong><br/>
                        <em className='company-info text-muted'>{data.DividendPerShare}</em>
                    </Card.Subtitle>
                     <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Next devidend date</strong><br/>
                        <em className='company-info text-muted'>{data.DividendDate}</em>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2">
                        <strong className='company-info'>Previous devidend date</strong><br/>
                        <em className='company-info text-muted'>{data.ExDividendDate}</em>
                    </Card.Subtitle>
                </Card.Body>
        </Card>
    )
}

export default CompanyCard

