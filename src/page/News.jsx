import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useNewsContext } from "../context/NewsContext";

const News = () => {
  const { fetchNews, news, loading } = useNewsContext();

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="py-8 min-h-[60vh]">
      <Wrapper>
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Latest News</h2>
            <p className="text-sm text-slate-500 mt-1">
              Stay updated with the world around you
            </p>
          </div>
          {!loading && news?.length > 0 && (
            <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
              {news.filter(a => a?.urlToImage && a?.description).length} articles
            </span>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && (!news || news.length === 0) && (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in-up">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-600">No articles found</h3>
            <p className="text-sm text-slate-400 mt-1">Try searching for something else</p>
          </div>
        )}

        {/* News grid */}
        {!loading && news?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {news.map((article, index) => {
              if (!article?.urlToImage || !article?.description) {
                return null;
              }
              return <NewsCard key={index} details={article} />;
            })}
          </div>
        )}
      </Wrapper>
    </section>
  );
};

const NewsCard = ({ details }) => {
  const publishedDate = details?.publishedAt
    ? new Date(details.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <article className="news-card group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          className="aspect-video object-cover w-full transition-transform duration-500 group-hover:scale-105"
          src={details?.urlToImage}
          alt={details?.title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {details?.source?.name && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-slate-700 shadow-sm">
            {details.source.name}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
          {details?.title}
        </h3>

        <p className="text-sm text-slate-500 mt-2.5 leading-relaxed line-clamp-2">
          {details?.description}
        </p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
          {publishedDate && (
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {publishedDate}
            </span>
          )}

          <button
            onClick={() => window.open(details?.url)}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors cursor-pointer"
          >
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100">
      <div className="aspect-video skeleton-shimmer" />
      <div className="p-5 space-y-3">
        <div className="h-5 skeleton-shimmer rounded-lg w-full" />
        <div className="h-5 skeleton-shimmer rounded-lg w-3/4" />
        <div className="h-4 skeleton-shimmer rounded-lg w-full mt-2" />
        <div className="h-4 skeleton-shimmer rounded-lg w-2/3" />
        <div className="flex justify-between mt-4 pt-4 border-t border-slate-50">
          <div className="h-3 skeleton-shimmer rounded w-20" />
          <div className="h-3 skeleton-shimmer rounded w-16" />
        </div>
      </div>
    </div>
  );
};

export default News;
