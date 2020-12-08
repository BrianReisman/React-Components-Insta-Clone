/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from "react";
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from "./components/Posts/Posts";
import SearchBar from "./components/SearchBar/SearchBar";
// Import the dummyData
import dummyData from "./dummy-data";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(dummyData);
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  //! 00:53:00
  const likePost = (postId) => {
    
    console.log('hi', postId);
    
    return;
    // 
    // 
    // 
    // 
    // Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
    // The callback passed into `map` performs the following logic:
    // - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
    // - otherwise just return the post object unchanged.

    // setPosts(posts.map(post => {
    //   return post.id === postId
        // ? {}
    //     : friend
    // }))
    // )

  };

  return (
    <div className="App">
      <SearchBar />
      <Posts likePost={likePost} posts={posts} />
    </div>
  );
};

export default App;
