import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post [Brian, this is PostS] is passing the right props!
  const { post, likePost } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(post.id)} />
      {/* Comments also wants its props! */}
      <Comments />
    </div>
  );
};

export default Post;

//large architecture
//import
//component {1. data 2. function 3. export JSX where you send prop with fake HTML}
//functions/behavior that happens at this level.
//sending props
//taking in props + deconstructing them
//If IT"S GREEN fake HTML <> That name needs to match what you import???