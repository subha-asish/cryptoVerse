 import React from 'react'
 import {Route,Link, Routes} from 'react-router-dom';
 import {Layout,Typography,Space} from 'antd';
import Navbar from './componemts/Navbar';

 import './App.css';
import { Homepage } from './componemts/Homepage';
import Exchange from './componemts/Exchange';
import Cryptocurrencies from './componemts/Cryptocurrencies';
import CryptoDetails from './componemts/CryptoDetails';
import News from './componemts/News';
 const App = () => {
   return (
     <>
     <div className="app">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path='/' element={<Homepage/>} >  </Route>
                <Route exact path='/exchanges' element={<Exchange/>} > </Route>
                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>} > </Route>
                <Route exact path='/crypto/:coinId' element={<CryptoDetails/>} ></Route>
                <Route exact path='/news' element={ <News/>}> </Route>
                <Route path="*" element={<div>No Page found</div>}></Route>
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title level={5} style={{color : 'white',textAlign:'center'}}>
              Cryptoverse <br/>
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchangess'>Exchange</Link>
              <Link to='/news'>News</Link>
            </Space>

          </div> 
        </div>
        
     </div>
      
     </>
   )
 }
 
 export default App
