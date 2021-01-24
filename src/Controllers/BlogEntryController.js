import React from 'react';
import BlogCategory from './BlogCategoryContoller';
import { FaUserInjured } from 'react-icons/fa';
import '../scss/BlogEntry.scss';

const BlogEntry = props => {
  var regex = /(<([^>]+)>)/ig

  console.log(props.images)
  return (
    <div className="card" id="card">
      {props.images}
      <h1 className="blog-title">{props.entry.title}</h1>
      <div className="blog-description">
        {props.entry.description.slice(1,150).replace(regex, '')}...
        <a 
          target="_blank"
          rel="noopener noreferrer"
          href={props.entry.link}>
        <p>
          <button
            type='button'
            className='btn'
            >Read More</button>
          </p>
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