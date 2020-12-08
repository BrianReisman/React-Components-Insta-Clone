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
    // console.log(posts);
    // console.log(postId);
    //To update state, we call its setter function since we cannot manipulate it directly. What we pass to the setter becomes state.
    setPosts(
      //What we want to update state to is based on which of the posts in our state ARRAY just experienced a click. So we flip through each post in state and for each
      posts.map((each) => {
        //we ask whether or not the id property of this particular post we are mapping over MATCHES the postId (which is the element that was just clicked)
        if (each.id === postId) {
          //if this is true, we want to return (and the return is was gets stored/passed into our state setter) is an exact copy of what the current state is with one change. The one change is for THIS item within the state array, I want to update/adjust the likes: property and increment it by one.
          console.log(each);
          return { ...each, likes: each.likes + 1 };
          //if this particular item on this particular loop while mapping through the whole state Array is NOT the same as the one that just got click. Nothing to do here. But we need to return something out of this if statement otherwise state will be set to undefined. So return the item as it was, whole.
        } else {
          return each;
        }
      })
    );

  };

  return (
    <div className="App">
      <SearchBar />
      <Posts likePost={likePost} posts={posts} />
    </div>
  );
};

export default App;
