import { useState, memo } from 'react'
import { Link } from 'react-router-dom'
import '../styles/FinalProject.css'

interface Post {
  id: number
  username: string
  likes: number
  caption: string
}

// Feature flag - would typically come from configuration or API
const ENABLE_LAZY_LOADING = true

// Optimized with React.memo
const PostHeader = memo(({ username }: { username: string }) => (
  <div className="post-header">
    <div className="avatar"></div>
    <span className="username">{username}</span>
  </div>
))

// Add display name for React DevTools
PostHeader.displayName = 'PostHeader'

function FinalProjectAfter() {
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
        <h1>Instagram-like Feed (Optimized)</h1>
        <p>This is the optimized version with improved performance!</p>
        <p>
          <small>
            Feature flags: Lazy loading is{' '}
            {ENABLE_LAZY_LOADING ? 'enabled' : 'disabled'}
          </small>
        </p>
      </nav>

      <div className="feed">
        {posts.map((post, index) => (
          <div className="post" key={post.id}>
            <PostHeader username={post.username} />

            {index === 0 ? (
              <img
                src="https://picsum.photos/800/800.webp?fixed=1"
                alt={`Post by ${post.username}`}
                className="post-image"
                fetchPriority="high"
              />
            ) : (
              <img
                src={`https://picsum.photos/800/800.webp?random=${post.id}`}
                alt={`Post by ${post.username}`}
                className="post-image"
                // Apply lazy loading based on feature flag
                loading={ENABLE_LAZY_LOADING ? 'lazy' : undefined}
              />
            )}

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

export default FinalProjectAfter
