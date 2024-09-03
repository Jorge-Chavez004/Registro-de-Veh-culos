import './App.css'
import Header from './components/Header/Header'
import Post from './components/Post/Post'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const rawPosts = localStorage.getItem('posts');
    if (!rawPosts) {
      localStorage.setItem('posts', JSON.stringify(posts))
    } else {
      setPosts(JSON.parse(rawPosts))
    } 
  }, [])  
  
  return (
    <>
      <Header />
      {
        posts.length > 0 ? (
          posts.map( (item) => <Post {...item} key={item.NumPlaca}/>))
         : 
         <Post />
        
      }
    </>
  )
}

export default App
