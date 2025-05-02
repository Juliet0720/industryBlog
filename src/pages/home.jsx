"use client"

import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="container home-container">
      <section className="home-hero">
        <h1>Industry Visit</h1>
        <p>
          Welcome to our platform where we share insights and experiences from our industry visits. Explore our
          collection of visits to various companies and organizations.
        </p>
      </section>

      <div className="button-container">
        <button onClick={() => navigate("/blog")} className="primary-button">
          Explore Our Blog
        </button>
      </div>
    </div>
  )
}

export default Home
