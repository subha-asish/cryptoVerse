import React from 'react'
import millify from 'millify';
import { Typography,Row , Col ,Statistic } from 'antd';
import{Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const {Title} = Typography;
export const Homepage = () => {
    const  {data,isFetching} =useGetCryptosQuery();
    const globaStats = data?.data?.stats;

    if(isFetching) return (<Loader/>);

  return (
        <>
        <Title level={2} className='heading' >
            Global Crypto Stats 
        </Title>
        <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={globaStats.total}/></Col>
            <Col span={12}><Statistic title="Total Exchanges" value= {millify(globaStats.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value= {millify(globaStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value= {millify(globaStats.total24hVolume)}/></Col>
            <Col span={12}><Statistic title="Total Markets" value={globaStats.totalMarkets}/></Col>
             
        </Row>
        <div className="home-heading-container">
            <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
            <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className="home-heading-container">
            <Title level={2} className='home-title'>Top 10 Crypto NEWS in the world</Title>
            <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
        </div>
        <News simplified/>


        </>
  )
}
