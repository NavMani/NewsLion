import React from 'react'

const NewsItem = (props) => {
  let {title, description, imageUrl,newsUrl, author, date } = props;
  return (
    <div className='my-3'>
        <div className="card" >
  <img src={imageUrl?imageUrl:"https://gizmodo.com/app/uploads/2025/11/framework-laptop-16-review-03-1600x1067.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
