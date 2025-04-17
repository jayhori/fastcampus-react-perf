import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/FinalProject.css'

// Dev環境
// JPG: 2.2MB
// WebP: 894kB

// Before preloading
// Fast 4G
// LCP: 4.24s, 4.14s, 5.22s
//
// Slow 4G
// LCP: 13.22s (Did not record what LCP was), 11.39s (LCP was the title), 14.45s (LCP was the first image)
//
// After preloading
// Fast 4G
// LCP: 2.39s, 2.31s, 4.37s (The preloaded image eventually became LCP, but the LCP value did not ditermin until much later than it loaded.)
//
// Production env
// Fast 4G
// LCP: 0.54s, 2.96s, 2.40s
// Slow 4G
// LCP: 1.86s, 1.86s, 1.86s (This might be a human error redundancy), 2.14s

interface Post {
  id: number
  username: string
  likes: number
  caption: string
}

function FinalProjectBefore() {
  const generatePosts = (): Post[] => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      username: `user_${Math.floor(Math.random() * 1000)}`,
      likes: Math.floor(Math.random() * 1000),
      caption:
        'This is a beautiful photo I took on my recent trip! #photography #nature #adventure',
    }))
  }

  const [posts, setPosts] = useState<Post[]>(generatePosts())

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post,
      ),
    )
  }

  const PostHeader = ({ username }: { username: string }) => (
    <div className="post-header">
      <div className="avatar"></div>
      <span className="username">{username}</span>
    </div>
  )

  return (
    <div className="final-project">
      <nav>
        <Link to="/">Back to Home</Link>
        <h1>Instagram-like Feed (Unoptimized)</h1>
        <p>
          This page has several performance issues that need to be fixed. Your
          task is to identify and optimize them!
        </p>
      </nav>

      <div className="feed">
        {posts.map((post, index) => (
          <div className="post" key={post.id}>
            <PostHeader username={post.username} />

            {index === 0 ? (<img
              src={`https://picsum.photos/800/800.webp?fixed=1`}
              alt={`Post by ${post.username}`}
              className="post-image"
              fetchPriority='high'
            />) : (<img
              src={`https://picsum.photos/800/800.webp?random=${post.id}`}
              alt={`Post by ${post.username}`}
              className="post-image"
              loading="lazy"
            />)}
            
            <div className="post-actions">
              <button
                className="like-button"
                onClick={() => handleLike(post.id)}
              >
                ❤️ {post.likes}
              </button>
              <button className="comment-button">💬 Comment</button>
            </div>
            <div className="post-caption">
              <span className="username">{post.username}</span> {post.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FinalProjectBefore
