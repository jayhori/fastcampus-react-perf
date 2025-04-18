import { useState, memo } from 'react'
import { Link } from 'react-router-dom'
import '../styles/FinalProject.css'

/**
 * PERFORMANCE BENCHMARKS
 * =====================
 * 
 * Image Sizes:
 * - JPG: 2.2MB
 * - WebP: 894kB (59% smaller)
 * 
 * Development Environment:
 * ------------------------
 * | Condition      | Network   | LCP Values                   | Notes                                          |
 * |----------------|-----------|------------------------------|------------------------------------------------|
 * | Before         | Fast 4G   | 4.24s, 4.14s, 5.22s          |                                                |
 * | preloading     | Slow 4G   | 13.22s, 11.39s, 14.45s       | Varying LCP elements (title, first image)      |
 * |----------------|-----------|------------------------------|------------------------------------------------|
 * | After          | Fast 4G   | 2.39s, 2.31s, 4.37s          | Preloaded image became LCP but value           |
 * | preloading     |           |                              | determined later than actual load              |
 * 
 * Production Environment (After preloading):
 * -----------------------
 * | Network   | LCP Values                       | Notes                                     |
 * |-----------|----------------------------------|-------------------------------------------|
 * | Fast 4G   | 0.54s, 2.96s, 2.40s              |                                           |
 * | Slow 4G   | 1.86s, 1.86s, 1.86s, 2.14s       | Potential measurement redundancy          |
 */

interface Post {
  id: number
  username: string
  likes: number
  caption: string
}

const PostHeader = memo(({ username }: { username: string }) => (
  <div className="post-header">
    <div className="avatar"></div>
    <span className="username">{username}</span>
  </div>
))

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
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post,
      ),
    )
  }

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
