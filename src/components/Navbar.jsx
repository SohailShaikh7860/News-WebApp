import React, { useEffect, useState, useRef } from 'react';
import Wrapper from './Wrapper.jsx';
import { useNewsContext } from '../context/NewsContext';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { fetchNews } = useNewsContext();
  const timer = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      if (!searchValue) return;
      await fetchNews(`/everything?q=${searchValue}`);
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timer.current);
  }, [searchValue]);

  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <Wrapper>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold gradient-text tracking-tight">
              NewsHub
            </h1>
          </div>

          {/* Search */}
          <div className="flex items-center gap-3">
            <div className={`relative transition-all duration-300 ease-out ${isSearchOpen ? 'w-64 sm:w-80' : 'w-0'} overflow-hidden`}>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search for news..."
                className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                onBlur={() => {
                  if (!searchValue) setIsSearchOpen(false);
                }}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              aria-label="Toggle search"
            >
              {isSearchOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
