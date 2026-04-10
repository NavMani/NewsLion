import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News= (props) => {
 const [articles, setArticles] = useState([]);
 const [loading, setLoading] = useState(false);
 const [page, setPage] = useState(1);
 
 const [hasMore, setHasMore] = useState(true);
    
   

const updateNews = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    
    setLoading(false);
   
   }

   useEffect(() => {
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsLion`;
    updateNews();
    // eslint-disable-next-line
  }, []);





const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
   
    if (!parsedData.articles || parsedData.articles.length === 0) {
        setHasMore(false);
        return;
    }
    setArticles(articles.concat(parsedData.articles));
   

  
  };

  
    return (
      <>
      <div style={{ height: '50px' }}></div>
        <h2 className='text-center mt-4'>NewsLion - Top Headlines</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
        >
        <div className="container">
        <div className="row">
        {!loading && articles.map((element) => {
          return <div className="col-md-4" key={element.url || Math.random()}>
            <NewsItem
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
            />
          </div>
        })}
        
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    )
  
}

 News.defaultProps = {
        country: 'us',
        pageSize: 20
    }

   News.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }

export default News
