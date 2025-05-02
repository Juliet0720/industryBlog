"use client"

import { useState } from "react"
import PostCard from "../components/PostCard"
import PostDetail from "../components/postDetail"

import coverImg1 from "../assets/cover-day1.jpg"
import coverImg2 from "../assets/cover-day2.jpg"
import coverImg3 from "../assets/cover-day3.jpg"
import coverImg4 from "../assets/cover-day4.jpg"
import coverImg5 from "../assets/cover-day5.jpg"
import coverImg6 from "../assets/cover-day6.jpg"

import day1Img1 from "../assets/rizal.jpg"
import day1Img2 from "../assets/flag.jpg"
import day1Img3 from "../assets/reducto.jpg"
import day1Img4 from "../assets/fort.jpg"

import day2Img1 from "../assets/subicport.jpg"
import day2Img2 from "../assets/subicport1.jpg"
import day2Img3 from "../assets/lawenforcement.jpg"
import day2Img4 from "../assets/lawenforcement1.jpg"

import day3Img1 from "../assets/museum.jpg"
import day3Img2 from "../assets/museum1.jpg"
import day3Img3 from "../assets/qcmemorial.jpg"
import day3Img4 from "../assets/qcmemorial1.jpg"
import day3Img5 from "../assets/lolong.jpg"
import day3Img6 from "../assets/carmuseum.jpg"
import day3Img7 from "../assets/carmuseum1.jpg"

import day4Img1 from "../assets/hytec.jpg"
import day4Img2 from "../assets/hytec1.jpg"
import day4Img3 from "../assets/bsp.jpg"

import day5Img1 from "../assets/lrt1.jpg"
import day5Img2 from "../assets/lrt2.jpg"
import day5Img3 from "../assets/lrt3.jpg"
import day5Img4 from "../assets/lrt4.jpg"
import day5Img5 from "../assets/mmda.jpg"
import day5Img6 from "../assets/cover-day5-1.jpg"

import day6Img1 from "../assets/farm.jpg"
import day6Img2 from "../assets/farm1.jpg"
import day6Img3 from "../assets/PMA.jpg"

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  const posts = [
    {
      id: 1,
      title: "Day 1 - Manila Tour",
      date: "2025-04-07",
      description: "Exploring the rich history of Manila.",
      fullContent: "We visited Rizal Park, Reducto de San Jose, and Fort Santiago.",
      image: coverImg1,
      dayImages: [
        {
          images: [day1Img1, day1Img2],
          caption: "Rizal Park",
          sectionTitle: "Future Developments",
          sectionText: "Details about Rizal Park's ongoing plans and improvements."
        },
        {
          images: [day1Img3, day1Img4],
          caption: "Reducto de San Jose & Fort Santiago",
          sectionTitle: "Future Developments",
          sectionText: "Historical preservation initiatives and tourism improvements."
        }
      ]
    },
    {
      id: 2,
      title: "Day 2 - Subic and Law Enforcement",
      date: "2025-04-08",
      description: "A deeper look into port operations and maritime law enforcement.",
      fullContent: "We had briefings at Subic Port and visited law enforcement agencies.",
      image: coverImg2,
      dayImages: [
        {
          images: [day2Img1, day2Img2],
          caption: "Subic Port",
          sectionTitle: "Port Expansion Plans",
          sectionText: "The port is planning to expand facilities to boost trade."
        },
        {
          images: [day2Img3, day2Img4],
          caption: "Law Enforcement Division",
          sectionTitle: "Security Improvements",
          sectionText: "Agencies are integrating more tech for border security."
        }
      ]
    },
    
      {
        id: 3,
        title: "Day 3 - Museum Tour",
        date: "2025-04-09",
        description: "Discovering Filipino history and science through museums.",
        fullContent: "We visited the National Museum, QC Memorial Circle, and Car Museum.",
        image: coverImg3,
        dayImages: [
          {
            images: [day3Img1, day3Img2],
            caption: "National Museum",
            sectionTitle: "Educational Enhancements",
            sectionText: "Plans to digitize exhibits and add interactive learning."
          },
          {
            images: [day3Img3, day3Img4],
            caption: "QC Memorial Circle",
            sectionTitle: "Urban Development",
            sectionText: "Green space improvements and cultural programs."
          },
          {
            images: [day3Img6, day3Img7],
            caption: "Car Museum",
            sectionTitle: "Transport History",
            sectionText: "Highlighting evolution of Philippine automotive history."
          }
        ]
      },
      
    
    {
      id: 4,
      title: "Day 4 - BSP and Hypertech",
      date: "2025-04-10",
      description: "A deeper look into port operations and maritime law enforcement.",
      fullContent: "We had briefings at Subic Port and visited law enforcement agencies.",
      image: coverImg4,
      dayImages: [
        {
          images: [day4Img3],
          caption: "Bangko Sentral ng Pilipinas",
          sectionTitle: "Port Expansion Plans",
          sectionText: "The port is planning to expand facilities to boost trade."
        },
        {
          images: [day4Img1, day4Img2],
          caption: "HyTech",
          sectionTitle: "Security Improvements",
          sectionText: "Agencies are integrating more tech for border security."
        }
      ]
    },
    {
      id: 5,
      title: "Day 5 - Light Rail Transit Line 2 & Metropolitan Manila Development Authority",
      date: "2025-04-11",
      description: "A deeper look into port operations and maritime law enforcement.",
      fullContent: "We had briefings at Subic Port and visited law enforcement agencies.",
      image: coverImg5,
      dayImages: [
        {
          images: [day5Img1, day5Img2],
          caption: "LRT Line 2",
          sectionTitle: "Port Expansion Plans",
          sectionText: "The port is planning to expand facilities to boost trade."
        },
        {
          images: [day5Img3, day5Img4],
          caption: "LRT Line 2: Santolan to Antipolo & Vice Versa",
          sectionTitle: "Security Improvements",
          sectionText: "Agencies are integrating more tech for border security."
        },
        {
          images: [day5Img5, day5Img6],
          caption: "MMDA",
          sectionTitle: "Security Improvements",
          sectionText: "Agencies are integrating more tech for border security."
        },
      
      ]
    },
    {
      id: 6,
title: "Day 6 - Start of Baguio Tour",
date: "2025-04-12",
description: "Kicking off our Baguio tour with a visit to Benguet's iconic Strawberry Farm and the prestigious Philippine Military Academy.",
fullContent: "Our journey to Baguio began with a refreshing stop at the Strawberry Farm in La Trinidad, Benguet. Participants had the chance to pick fresh strawberries and experience local farming practices firsthand. The cool climate and scenic views were a welcome change. Afterwards, we headed to the Philippine Military Academy, where we explored its historical landmarks, watched the cadets in training, and gained insights into the country's premier military education institution.",
image: coverImg6,
dayImages: [
  {
    images: [day6Img1, day6Img2],
    caption: "Strawberry Farm, Benguet",
    sectionTitle: "Agricultural Tourism",
    sectionText: "The Strawberry Farm in La Trinidad is not only a major source of strawberries in the country but also a prime agri-tourism site that showcases sustainable farming and boosts local livelihood."
  },
  {
    images: [day6Img3],
    caption: "Philippine Military Academy",
    sectionTitle: "National Defense Education",
    sectionText: "The PMA tour highlighted the academy’s role in shaping the country's future military leaders and preserving national security through discipline, honor, and excellence."
  }
]

    },
    {
      id: 7,
      title: "Day 7 - End of Baguio Tour",
      date: "2025-04-13",
      description: "A deeper look into port operations and maritime law enforcement.",
      fullContent: "We had briefings at Subic Port and visited law enforcement agencies.",
      image: coverImg2,
      dayImages: [
        {
          images: [day2Img1, day2Img2],
          caption: "Subic Port",
          sectionTitle: "Port Expansion Plans",
          sectionText: "The port is planning to expand facilities to boost trade."
        },
        {
          images: [day2Img3, day2Img4],
          caption: "Law Enforcement Division",
          sectionTitle: "Security Improvements",
          sectionText: "Agencies are integrating more tech for border security."
        }
      ]
    },
    {
      id: 8,
      title: "Day 8 - Fligth back to Zamboanga",
      date: "2025-04-14",
      description: "A deeper look into port operations and maritime law enforcement.",
      fullContent: "We had briefings at Subic Port and visited law enforcement agencies.",
      image: coverImg2,
      dayImages: [
        {
          images: [day2Img1, day2Img2],
          caption: "Subic Port",
          sectionTitle: "Port Expansion Plans",
          sectionText: "The port is planning to expand facilities to boost trade."
        },
        {
          images: [day2Img3, day2Img4],
          caption: "Law Enforcement Division",
          sectionTitle: "Security Improvements",
          sectionText: "Agencies are integrating more tech for border security."
        }
      ]
    }
    
    
  ]

  const handlePostClick = (post) => {
    setSelectedPost(post)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="container blog-container">
      <h1>Industry Visit Blog</h1>

      {selectedPost ? (
        <div className="selected-post-container">
          <PostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onClick={() => handlePostClick(post)} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Blog
