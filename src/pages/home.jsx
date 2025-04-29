// File: src/pages/home.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePost, setActivePost] = useState(null);

  const blogPosts = [
    {
      day: "Day 1",
      title: "City Tour",
      content: "We arrived and attended an opening orientation session...",
    },
    {
      day: "Day 2",
      title: "Company Visit: Subic Bay Freeport Zone",
      content: "We toured Tech Innovators Inc., learning about AI and robotics.",
    },
    {
        day: "Day 3",
        title: "Free Day - Museum Tour",
        content: "We toured Tech Innovators Inc., learning about AI and robotics.",
      },
      {
        day: "Day 4",
        title: "Company Visit: Bangko Sentral ng Pilipinas & Hypertech",
        content: "We toured Tech Innovators Inc., learning about AI and robotics.",
      },
      {
        day: "Day 5",
        title: "Company Visit: LRT & MMDA",
        content: "We toured Tech Innovators Inc., learning about AI and robotics.",
      },
      {
        day: "Day 6",
        title: "Baguio City Tour",
        content: "We toured Tech Innovators Inc., learning about AI and robotics.",
      },
      {
        day: "Day 7",
        title: "End of Baguio City Tour",
        content: "We toured Tech Innovators Inc., learning about AI and robotics.",
      },
    // Add more posts if needed
  ];

  return (
    <div className="container">
      <main className="blog-content">
        <h1 className="blog-title">My 1-Week Educational Tour</h1>

        {!activePost ? (
          <div className="accordion-grid">
            {blogPosts.map((post, index) => (
              <div className="accordion-card" key={index} onClick={() => setActivePost(post)}>
                <div className="accordion-title">
                  {post.day}: {post.title}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="full-post">
            <button className="back-button" onClick={() => setActivePost(null)}>← Back to Blog</button>
            <div className="post-wrapper">
              <div className="post-text">
                <h2 className="post-title">{activePost.day}: {activePost.title}</h2>
                <p className="post-content">{activePost.content}</p>
              </div>
              {activePost.image && (
                <div className="post-image-wrapper">
                  <img
                    src={activePost.image}
                    alt={`${activePost.day} - ${activePost.title}`}
                    className="post-image"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2025 Juls' Educational Tour Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
