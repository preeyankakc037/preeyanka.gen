import { useState } from "react";
import { Link } from "react-router-dom";
import PlaylistCard from "../components/PlaylistCard";

const blogPosts = [
  {
    id: 1,
    date: "27 September 2025",
    source: "Preeyanka",
    title: "Start Building Tech Projects🤟",
    excerpt: "For Project Builders - 2 min read",
    image: "/blog1.jpg",
    link: "https://medium.com/@preeyankakc.07/start-building-tech-projects-e0cc49bd0190",
    category: "AI",
  },
  {
    id: 2,
    date: "3 June, 2025",
    source: "Preeyanka",
    title: "Build Bour Own RAG Based Chatbot",
    excerpt: "For Project Builders - 2 min read",
    image: "/blog2.png",
    link: "https://medium.com/@preeyankakc.07/building-legalease-ai-nepals-first-legal-chatbot-for-the-people-7d6ae5bc0e75",
    category: "AI",
  },
  {
    id: 3,
    date: "5 October, 2025",
    source: "Preeyanka",
    title: "20 Things to Do Instead of Scrolling",
    excerpt: "Build Habits That Transform Your Lifen - 3 min read",
    image: "/blog3.png",
    link: "https://medium.com/@preeyankakc.07/20-things-to-do-instead-of-scrolling-build-habits-that-transform-your-life-c4aaae989a04",
    category: "Self-Help"
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Latest");

  const filteredPosts =
    activeCategory === "Latest"
      ? blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen text-gray-300 ml-18 pt-12 pl-28 font-[Montserrat]">
      <div className="max-w-7xl mx-auto flex gap-10">
        {/* Left column (Blog posts) */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-white">My Blog</h1>

          {/* Tabs Navbar */}
          <nav className="flex gap-6 border-b border-gray-700 pb-2 pt-4 mb-8">
            {["Latest", "AI", "Self-Help", "Content Creation"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`text-gray-300 hover:text-white text-sm font-medium pb-2 transition-colors ${
                  activeCategory === tab ? "border-b-2 border-blue-500" : ""
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Blog Posts */}
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="flex items-center gap-4 bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors p-3"
              >
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-[200px] h-[120px] object-cover rounded"
                  />
                </a>
                <div className="flex-1">
                  <div className="text-blue-400 text-xs mb-1">
                    {post.date} • {post.source}
                  </div>
                  <h2 className="text-md font-semibold text-white hover:text-blue-400 transition-colors">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>


        </div>

        {/* Right column (Sidebar with PlaylistCard) */}
        <div className="sticky top-20 pl-[50px]">
          <PlaylistCard />
        </div>
      </div>
    </div>
  );
}
