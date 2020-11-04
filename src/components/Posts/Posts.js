import React from 'react';
import Post from './Post'; //*When i uncomment my <Post...> this will pass
import './Posts.css';

const Posts = (props) => {
//*DATA unpacking
  //🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props; //THE DATA IS HERE!
  console.log(posts);




//*Function/behavior/ SHOULD THIS BE OUTSIDE OF RETURN()?

//   const extracted = posts;
// console.log(extracted)



//*Return JSX can call other <green>. Return WHERE? Upstream. In order to return upstream to command central, I need to get something from one of the people that I manage.
  return ( //returning goes UPSTREAM to parent files. But we pull from downstream for the more specialized componet making capabilites that we have outsourced.
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning //*YOUNEEDTORETURN*// a Post component at each iteration */}

      {posts.map( item => {
        return <Post post={item} likePost={likePost}/>
      })}

  {/* const extracted = () =>
    posts.map( post => { //take the posts array of objects. And for each make a copy (map) of each post/item in the posts array.
      return post; //THEN, 
    }); */}


      {/* Check the implementation of Post to see what props it requires! [[Brian; it requires const {1. post, 2. likePost } = props;]*/}
      {/* <Post post={extracted} likePost={likePost} /> */}
      {/* I named the likePost(attrib/key) this was BECAUSE that is the name that is used to unpack/unlock it when it arrives at Post. and I gave it likePost which is a function. I knew it needed a function because in Post I saw it was invoked. I also knew I had created that function in App.js. SOOOOOO this is an example of a prop being passed into a js file and going straight through. No short stops. It's not being used here in Posts.js but we need to pass it to Posts.js from App.js so THAT we can pass it along and down to Post.js */}
    </div>
  );

};

export default Posts;
