import React, { createContext, useContext, useState } from 'react';
import { axiosApi } from '../config/axios';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('general');

  const fetchNews = async (url = "/everything?q=india") => {
    try {
      setLoading(true);
      const res = await axiosApi.get(
        `${url}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
      );
      setNews(res.data.articles);
    } catch (error) {
      console.log("news api error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    news,
    setNews,
    fetchNews,
    loading,
    activeCategory,
    setActiveCategory,
  };

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsProvider, useNewsContext };
