import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { axiosApi } from "../config/axios";
import { useNewsContext } from "../context/NewsContext";

const News = () => {
     
  const { fetchNews, news, setNews } = useNewsContext();

  
      useEffect(() => {
        fetchNews();
      },[]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {news.map((articale, index)=>{
         return (
          <NewsCard key={index} details={articale}/>
         )
      })}
    </div>
  );
};

const NewsCard = ({ details }) => {
  return (
    <Wrapper>
      <div className="card bg-base-200 w-96 shadow-sm">
        <figure>
          <img
            src={details?.urlToImage}
            alt={details?.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{details?.title}</h2>
          <p className="line-clamp-3">
            {details?.description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=>window.open(details?.url)}>Read More</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default News;
