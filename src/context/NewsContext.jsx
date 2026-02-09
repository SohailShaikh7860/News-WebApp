import React, {createContext, useContext, useState} from 'react'
import { axiosApi } from '../config/axios';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  const fetchNews = async (url= "/everything?q=india") => {
      try {
        const res = await axiosApi.get(
        `${url}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
      );
      console.log(res.data);
      setNews(res.data.articles);
      } catch (error) {
         console.log("news api error", error.message);
      }
      
    };

   const value ={
      news,
      setNews,
      fetchNews
   }
  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};

const useNewsContext = ()=>{
    return useContext(NewsContext);
}
export  {NewsProvider, useNewsContext};
