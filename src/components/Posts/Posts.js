import React from 'react';
import Post from './Post'; //*When i uncomment my <Post...> this will pass
import './Posts.css';

const Posts = (props) => {
//🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;


  

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
    
    
      {/* Check the implementation of Post to see what props it requires! it requires const {1. post, 2. likePost } = props;*/}
      {/* <Post post={} likePost={} /> */}
    </div>
  );
};

export default Posts;
