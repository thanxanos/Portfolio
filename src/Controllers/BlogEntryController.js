import React from 'react';
import BlogCategory from './BlogCategoryContoller';
import { FaUserInjured } from 'react-icons/fa';
import '../scss/BlogEntry.scss';

const BlogEntry = props => {
  var regex = /(<([^>]+)>)/ig

  return (
    <div className="card" id="card">
      {props.images}
      <hr />
      <h1 className="blog-title">{props.entry.title}</h1>
      <div className="blog-description">
        <div className="blog-txt">
        {props.entry.description.slice(1,150).replace(regex, '')}...
        </div>
        <a 
          target="_blank"
          rel="noopener noreferrer"
          href={props.entry.link}>
      
          <button
            type='button'
            className='btn'
            >Read More</button>
      
        </a>
      </div>
      <div className="blog-categories-container">
        <ul className="blog-categories">
          {props.entry.categories.map(category => <BlogCategory key={FaUserInjured.v4()} category={category} />)}
        </ul>
      </div>
    </div>
  )
}

export default BlogEntry;