import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '7307992fcbmshef1a91f6551f2e4p1ff726jsnbb64f8427dc1',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com";


const createRequest=(url) =>({url,headers : cryptoNewsHeaders});


export const cryptoNewsApi = createApi (
    {
        reducerPath:'cryptoNewsApi',
        baseQuery:fetchBaseQuery({baseUrl}),
        endpoints:(builder) => ({
            getCryptoNews : builder.query({
                query: ({newsCategory}) => createRequest (`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`)
            })
        })
    }
) 

export const {useGetCryptoNewsQuery} = cryptoNewsApi;