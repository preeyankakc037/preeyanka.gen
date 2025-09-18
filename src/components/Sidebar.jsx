import { FiHome, FiFileText } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { icon: FiHome, path: "/" },
  { icon: FaUserCircle, path: "/about" },
  { icon: GiHamburgerMenu, path: "/blog" },
  { icon: MdOutlineCategory, path: "/projects" },
  { icon: FiFileText, path: "/resume" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="flex flex-col fixed h-screen ml-28 border-r z-[1000]" // Increased z-index
      style={{
        borderColor: "#2d3748",
        width: "64px",
        padding: "16px 0",
        boxSizing: "border-box",
        backgroundColor: "transparent",
      }}
    >
      {/* Profile Image */}
      <div className="flex justify-center mb-4 px-2">
        <div
          className="rounded-full overflow-hidden"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "transparent",
          }}
        >
          <img
            src="/Profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col flex-grow justify-between mt-10">
        <nav className="flex flex-col gap-4 items-center flex-grow justify-center">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `p-1.5 flex items-center justify-center rounded-full transition-colors ${
                  isActive ? "active" : ""
                }`
              }
              style={{
                color: location.pathname === item.path ? "#63b3ed" : "#a0aec0",
                fontSize: "24px",
                backgroundColor: "transparent",
                width: "40px",
                height: "40px",
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) e.target.style.color = "#cbd5e0";
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) e.target.style.color = "#a0aec0";
              }}
            >
              <item.icon />
            </NavLink>
          ))}
        </nav>
        <div className="flex-grow" />
      </div>
    </aside>
  );
}