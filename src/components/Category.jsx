import React from 'react';
import Wrapper from './Wrapper';
import { useNewsContext } from '../context/NewsContext';

const Category = () => {
  const { fetchNews, activeCategory, setActiveCategory } = useNewsContext();

  const categories = [
    { key: 'business', icon: '💼' },
    { key: 'entertainment', icon: '🎬' },
    { key: 'general', icon: '📰' },
    { key: 'health', icon: '🏥' },
    { key: 'science', icon: '🔬' },
    { key: 'sports', icon: '⚽' },
    { key: 'technology', icon: '💻' },
  ];

  const handleClick = async (category) => {
    setActiveCategory(category);
    await fetchNews(`/everything?q=${category}`);
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm border-b border-slate-100">
      <Wrapper>
        <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
          {categories.map(({ key, icon }) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
                  whitespace-nowrap transition-all duration-200 cursor-pointer
                  ${isActive
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md category-pill-active'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                  }
                `}
              >
                <span className="text-base">{icon}</span>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
