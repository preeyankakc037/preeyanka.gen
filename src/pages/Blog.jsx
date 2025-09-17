import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    date: "Aug 21, 2025",
    source: "Preeyanka",
    title: "Never Record Again: How Mantra Uses Supermemory To Rethink Video Creation",
    excerpt: "External blog post from Preeyanka",
    image: "/animated_ray.png",
    link: "https://medium.com/@example1",
    category: "AI",
  },
  {
    id: 2,
    date: "Aug 31, 2025",
    source: "Preeyanka",
    title: "Build Your Own Perplexity in 15 Minutes With Supermemory",
    excerpt: "External blog post from Preeyanka",
    image: "/animated_ray.png",
    link: "https://medium.com/@example2",
    category: "AI",
  },
  {
    id: 3,
    date: "Jul 25, 2025",
    source: "Preeyanka",
    title: "The Art of Mindful Living: Finding Peace in a Busy World",
    excerpt: "How mindfulness helps reduce stress and build inner peace.",
    image: "/animated_ray.png",
    link: "https://medium.com/@example3",
    category: "Spirituality",
  },
  {
    id: 4,
    date: "Jul 18, 2025",
    source: "Preeyanka",
    title: "Connecting with Your Higher Self: A Journey Beyond the Ego",
    excerpt: "Exploring how to align with your higher self.",
    image: "https://via.placeholder.com/300x150/2d3748/ffffff?text=Higher+Self",
    link: "https://medium.com/@example4",
    category: "Spirituality",
  },
  {
    id: 5,
    date: "Jul 5, 2025",
    source: "Preeyanka",
    title: "The Power of Storytelling in Content Creation",
    excerpt: "Why storytelling makes content more powerful.",
    image: "https://via.placeholder.com/300x150/2d3748/ffffff?text=Storytelling",
    link: "https://medium.com/@example5",
    category: "Content Creation",
  },
  {
    id: 6,
    date: "Jul 1, 2025",
    source: "Preeyanka",
    title: "Content Creation Strategies for the Modern Digital World",
    excerpt: "Tips for consistent, authentic content.",
    image: "https://via.placeholder.com/300x150/2d3748/ffffff?text=Strategies",
    link: "https://medium.com/@example6",
    category: "Content Creation",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Latest");

  const filteredPosts =
    activeCategory === "Latest"
      ? blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen text-gray-300 ml-18 pt-12 font-[Montserrat]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-white">My Blog</h1>

        {/* Tabs Navbar */}
        <nav className="flex gap-6 border-b border-gray-700 pb-2 pt-4 mb-8">
          {["Latest", "AI", "Spirituality", "Content Creation"].map((tab) => (
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <article key={post.id} className="space-y-2">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-36 object-cover rounded"
                />
              </a>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-blue-400 text-xs mb-1">
                  {post.date} • {post.source}
                </div>
                <h2 className="text-lg font-semibold mb-1 text-white">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

    
      {/* Footer */}
<div className="mt-12 text-center">
  <a
    href="https://medium.com/@preeyankakc037"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-g font-medium hover:gap-3 transition-all"
  >
    <span className="text-white">Find more of my posts on</span>
    <span className="text-blue-500 ">Medium</span>
    <span className="text-blue-500 animate-pulse">✨</span>
  </a>
</div>

      </div>
    </div>
  );
}
