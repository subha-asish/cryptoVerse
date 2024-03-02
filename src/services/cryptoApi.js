import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '7307992fcbmshef1a91f6551f2e4p1ff726jsnbb64f8427dc1',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) =>({
    url,headers : cryptoApiHeaders
})

export const cryptoApi = createApi (
    {
        reducerPath:'cryptoApi',
        baseQuery:fetchBaseQuery({baseUrl}),
        endpoints:(builder) => ({
            getCryptos : builder.query({
                query: ( ) => createRequest ('/coins')
            }),
           
            getCryptoDetails:builder.query({
                query:(coinId) => createRequest(`/coin/${coinId}`),
            })
        })
    }
)

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery ,
   
}=cryptoApi;