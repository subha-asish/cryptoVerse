import React from 'react'
import { Select,Typography,Row,Col,Avatar,Card } from 'antd'
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const {Text,Title} =  Typography;
const {Option} =Select;
const demoUrl='https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_960_720.jpg';
const News = ({simplified}) => {

    const {data : cryptoNews} = useGetCryptoNewsQuery({newsCategory :'Cryptocurrency'})
    const cnt = simplified? 6:cryptoNews?.size

    if(!cryptoNews?.value) return "Loading...";
  return (
     <Row gutter={[24,24]}>
        {
            cryptoNews?.value.slice(0,cnt).map((news,i) =>(
                <Col xs={24} xm={12} lg={8} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={news.url} target="blank" rel="noreferrer">
                           <div className="news-image-container">
                            <Title className='news-title' level={4}>{news.name}</Title>
                            <img src={news?.image?.thumbnail?.contentUrl || demoUrl} alt="news"/>
                           </div>
                           <p>
                            {
                                news.description > 100 ?
                                `${news.description.substring(0,100)}...`
                                :news.description
                            }
                           </p>
                           <div className='provider-container'>
                            <div>
                                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoUrl}  alt="news" />
                                <Text className='provider-name'> {news?.provider[0]?.name}</Text>
                            </div>
                            <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                           </div>


                        </a>
                    </Card>

                </Col>
            ))
        }

     </Row>
  )
}

export default News