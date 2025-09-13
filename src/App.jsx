import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <div className="flex text-gray-400 min-h-screen">
          {/* Sidebar stays on left */}
          <Sidebar />

          {/* Main content */}
          <main className="ml-28 flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
