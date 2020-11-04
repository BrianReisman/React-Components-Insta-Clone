/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

//// Import the state hook
//TODO: I am importing SO THAT I CAN 1. assign it to state as is the case with DummyData or 2. So that I can call it <green> from my JSX?
import React, { useState } from 'react';
// Import the Posts (plural!) 
import Posts from './components/Posts/Posts' //TODO: check correct import
// and SearchBar components, since they are used inside App component
import SearchBar from './components/SearchBar/SearchBar' 
// Import the dummyData
import DummyData from './dummy-data.js' //* works.   console.log(dummyData)
import Styles from './App.css'; //* added "Styles from"


const App = () => { //*This is a component called App.
  //*App data/states
  const [ posts , setPosts ] = useState(DummyData); //* data coming IN according to debugger and
  const [ search , setSearch ] = useState(SearchBar); //TODO: come if I ever reach the stretch.
  console.log(posts);
  //// Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  //// This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.










  //*App functions/behaviors
  const likePost = (postId) => {
      setPosts(posts.map( item => {
        return item.id === postId
          ? {...item, likes: item.likes + 1} //if TRUE incease the like count
          : item //if NOT, return this particular item from the copy/map of posts as it was unchanged
      }));
    };      
    
    
    
    /*
      This function ['likePost'] serves the purpose of increasing the number of likes by one, of the post with a given id.
  
      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state! Change>verb>function
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`. //* invoke>call>()>pass it something>new state >>> need to .map() original which is posts

      The callback passed into `map` performs the following logic: //* /map()>is filled with a CB id === 'postId' ? return
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator). //* spead operator
        - otherwise just return the post object unchanged.
     */

 









/* /* React
      <App name={'brian'} />
      Vanilla Js
      app('brian'); */

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar /> props go in here
      <Posts likePost={likePost} posts={posts}/> 

      {/* Check the implementation of each component, to see what props they require, if any! */}

    </div>
  );
};

export default App;
