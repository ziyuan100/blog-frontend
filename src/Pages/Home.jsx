/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import Navbar from "../Components/Navbar"
import Post from "../Components/Post"
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { tag } = useParams();

  useEffect(() => {
    /*
      useEffect checks for strict equivalency between all the items in the array from previous render to new render
      Therefore, putting an array e.g. posts into useEffect will cause the callback function in useEffect to keep getting called, 
      since array comparison checks equivalency by reference and not value
      E.g.  foo = [1,2,3]
            bar = foo
            foo === bar //true

            while

            foo = [1,2,3]
            bar = [1,2,3]
            foo === bar //false
      
      Hence, need to use an empty dependency array with useEffect, so the callback function is only called once the page renders. 
    */
    const updatePosts = async () => {
      try {
        if (tag){
          const response = await axios.get(`//localhost:3000/posts/${tag}`);
          setPosts(response.data);
        }
        else {
          const response = await axios.get('//localhost:3000/posts');
          setPosts(response.data);
        }
      } catch (e) {
        console.error(e);
      }
    }
    
    updatePosts()
  }, [])


  return (
    <>
      <Navbar />  
      {/* TODO add a banner that only shows if home is displaying filtered posts, stating "Tags: x" */}
      {posts.map((post, i) => (
        <Post key={i} postObj={post}/>
      ))}
    </>
  )
}