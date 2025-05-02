"use client"

function PostCard({ post, onClick }) {
  return (
    <div className="post-card" onClick={onClick}>
      <img src={post.image || "https://placehold.co/300x200"} alt={post.title} />
      <div className="post-content">
        <h3>{post.title}</h3>
        <p className="post-description">{post.description}</p>
        <div className="post-date">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="calendar-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
