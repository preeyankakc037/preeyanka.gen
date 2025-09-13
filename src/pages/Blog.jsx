// src/pages/Blog.jsx
import { NavLink } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    date: "Aug 21, 2025",
    source: "SUPERMEMORY BLOG",
    title: "Never Record Again: How Mantra Uses Supermemory To Rethink Video Creation",
    excerpt: "External blog post from Supermemory Blog",
    image: "https://via.placeholder.com/300x150/2d3748/ffffff?text=Video+Creation",
  },
  {
    id: 2,
    date: "Aug 31, 2025",
    source: "SUPERMEMORY BLOG",
    title: "Build Your Own Perplexity in 15 Minutes With Supermemory",
    excerpt: "External blog post from Supermemory Blog",
    image: "https://via.placeholder.com/300x150/2d3748/ffffff?text=Perplexity",
  },
  {
    id: 3,
    date: "Jul 25, 2025",
    source: "SUPERMEMORY BLOG",
    title: "Unified Memory That Works Where You Work Your Second Brain With Supermemory",
    excerpt: "External blog post from Supermemory Blog",
    image: "https://via.placeholder.com/300x150/2d3748/ffffff?text=Unified+Memory",
  },
];

export default function Blog() {
  return (
    <div className="bg-[#0F172A] min-h-screen text-gray-300 ml-64 flex-1 p-8"> {/* ml-64 for sidebar offset, consistent bg */}
      {/* Top Right Elements */}
      <div className="fixed top-4 right-4 flex items-center gap-4 text-gray-300 text-sm z-20">
        <span>1 friend here IN 🌙</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Sign my guestbook
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-white">My Blog</h1>
        
        {/* Horizontal Navbar */}
        <nav className="flex gap-6 border-b border-gray-700 pb-2 mb-8">
          {["Latest", "External", "Coding", "Shipped", "Stories", "Tutorials", "Gcsp", "Essays", "Beginners"].map((tab, idx) => (
            <NavLink
              key={idx}
              to={`/blog/${tab.toLowerCase()}`}
              className={({ isActive }) => 
                `text-gray-300 hover:text-white text-base font-medium transition-colors pb-2 ${
                  tab === "Latest" || isActive ? "border-b-2 border-blue-500" : ""
                }`
              }
            >
              {tab}
            </NavLink>
          ))}
        </nav>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts Column */}
          <div className="lg:col-span-2 space-y-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="space-y-2">
                <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded" />
                <div className="bg-gray-800 p-4 rounded">
                  <div className="text-blue-400 text-sm mb-1">{post.date} • {post.source}</div>
                  <h2 className="text-xl font-semibold mb-2 text-white">{post.title}</h2>
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Welcome Tooltip */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400">👋</span>
                <h3 className="font-medium text-white">Thanks for visiting my site!</h3>
              </div>
              <p className="text-gray-400 text-sm">Glad to have you here.</p>
            </div>

            {/* Guestbook/Email */}
            <div className="space-y-2">
              <button className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition-colors">
                Leave a message on my guestbook →
              </button>
              <button className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition-colors">
                Send an email →
              </button>
            </div>

            {/* Sponsor */}
            <button className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition-colors">
              Sponsor me on GitHub →
            </button>

            {/* Playlist Card */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-white">Playlist: songs I was once hooked on</h3>
              <p className="text-gray-400 text-sm">These songs are ones that at least once in my life obsessed with, obsessed as in listen to it on repeat.</p>
              <img src="https://via.placeholder.com/200x100/2d3748/63b3ed?text=Playlist" alt="Playlist" className="w-full mt-2 rounded" />
            </div>

            {/* Content Creation */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-white">I create content!</h3>
              <button className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition-colors">
                Check out Dhravya.dev →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}