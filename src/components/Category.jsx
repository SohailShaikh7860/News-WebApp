import React from 'react'
import Wrapper from './Wrapper';
import { useNewsContext } from '../context/NewsContext';

const Category = ({ className }) => {
      
  const { fetchNews, setNews } = useNewsContext();
  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  const handlClick = async (category)=>{
       await fetchNews(`/everything?q=${category}`);
  }
  return (
    <Wrapper>
    <div className={`max-w-full w-fit m-auto flex overflow-x-auto gap-4 scrollbar-hide ${className}`}>
      {categories.map((category) => (
          <button key={category} className="btn btn-primary " onClick={() => handlClick(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
      ))}
    </div>
    </Wrapper>
  )
}

export default Category;