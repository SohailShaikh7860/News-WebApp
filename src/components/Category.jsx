import React from 'react'
import Wrapper from './Wrapper';

const Category = ({ className }) => {

  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  return (
    <Wrapper>
    <div className={`max-w-full w-fit m-auto flex overflow-x-auto gap-4 scrollbar-hide ${className}`}>
      {categories.map((category) => (
          <button key={category} className="btn btn-primary ">{category.charAt(0).toUpperCase() + category.slice(1)}</button>
      ))}
    </div>
    </Wrapper>
  )
}

export default Category;