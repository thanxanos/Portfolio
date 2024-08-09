import React from 'react';
import '../scss/Blog.scss';
import BlogEntry from './BlogEntryController';



class BlogController extends React.Component {
  constructor(){
    super()
    this.state = {
      blogs: [],
      images: [
        { id: 1, src: '../Imgs/img1.jpg', title: 'img1', description: 'image1' },
        { id: 2, src: '../Imgs/img2.jpg', title: 'img2', description: 'image2' },
        { id: 3, src: '../Imgs/img3.jpg', title: 'img3', description: 'image3' },
        { id: 4, src: '../Imgs/img4.jpg', title: 'img4', description: 'image4' },
        { id: 5, src: '../Imgs/img5.jpg', title: 'img5', description: 'image5' },
        { id: 6, src: '../Imgs/img6.jpg', title: 'img6', description: 'image6' },
        { id: 7, src: '../Imgs/img7.jpg', title: 'img7', description: 'image7' },
        { id: 8, src: '../Imgs/img8.jpg', title: 'img8', description: 'image8' },
        { id: 9, src: '../Imgs/img9.jpg', title: 'img9', description: 'image9' },
        { id: 10, src: '../Imgs/img10.jpg', title: 'img10', description: 'image10' },
        { id: 11, src: '../Imgs/img11.jpg', title: 'img11', description: 'image11' },
        { id: 12, src: '../Imgs/img12.jpg', title: 'img12', description: 'image12' },
        { id: 13, src: '../Imgs/img13.jpg', title: 'img13', description: 'image13' },
        { id: 14, src: '../Imgs/img14.jpg', title: 'img14', description: 'image14' },
        { id: 15, src: '../Imgs/img15.jpg', title: 'img15', description: 'image15' },
        { id: 16, src: '../Imgs/img16.jpg', title: 'img16', description: 'image16' },
        { id: 17, src: '../Imgs/img17.jpg', title: 'img17', description: 'image17' },
        { id: 18, src: '../Imgs/img18.jpg', title: 'img18', description: 'image18' },
        { id: 19, src: '../Imgs/img19.jpg', title: 'img19', description: 'image19' },
        { id: 20, src: '../Imgs/img20.jpg', title: 'img20', description: 'image20' },
        { id: 20, src: '../Imgs/img21.jpg', title: 'img21', description: 'image21' }
      ]
    }
  }
  //maybe move this to a controller and take it out of state for cleaner code
  newImages = () => { 
    var setImages = this.state.images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} className='blog-img' />)
    return setImages[Math.floor(Math.random() * setImages.length)]
  }


  componentDidMount() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thanxanos')
      .then(resp => resp.json())
      .then(blogs => this.setState({ blogs: blogs.items.slice(0,3)}))
  }

  render(){
    return(
      <div className="blog">
        <div className="blog-buffer"></div>
        <div data-aos="fade-in" data-aos-duration="700" className="title">
            <h1>Medium | <span>@thanxanos</span></h1>
          </div>
        <div data-aos="zoom-out-up" delay="40" data-aos-duration="800" id="blogwrapper">
            {this.state.blogs.map(entry => <BlogEntry key={entry.pubDate} entry={entry} images={this.newImages()} />)}
        </div>
      </div>
    )
  }
}

export default BlogController;