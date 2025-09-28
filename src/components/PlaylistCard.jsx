// src/components/PlaylistCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const PlaylistCard = () => {
  return (
    <div
      className="w-80 p-4 rounded-2xl mb-8 mt-[100px] mr-[29px]"
      style={{ backgroundColor: "hsl(217 33% 17%)" }}
    >
      <a
        href="https://youtube.com/playlist?list=PLQhtp7kpQprLhSxWmnj6QXVcYkr9oQGls&si=In8yU_MwfvLoQEhQ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open playlist on YouTube"
      >
        <img
          src="/animated_ray.png"
          alt="Playlist thumbnail"
          className="w-full h-36 object-cover rounded-lg mb-3 cursor-pointer hover:scale-105 transition-transform"
        />
      </a>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-lg">🎵</span>
        <span className="text-sm" style={{ color: "hsl(217 10% 64%)" }}>
          Playlist: songs I code to
        </span>
      </div>

      <p className="text-sm mb-3" style={{ color: "hsl(217 10% 64%)" }}>
        These are the songs I code to — listened on repeat at least once in my
        life.
      </p>

      <div className="space-y-2">
        <div className="text-sm" style={{ color: "hsl(217 10% 64%)" }}>
          👋 Thanks for visiting my site!
        </div>
        <div className="font-semibold text-white">Glad to have you here.</div>

        <div className="space-y-1 mt-2">
          <Link
            to="/guestbook"
            className="text-blue-400 text-sm flex items-center gap-2 hover:underline"
          >
            Leave a message on my guestbook <span>→</span>
          </Link>

          <a
            href="mailto:preeyankakc.07@gmail.com"
            className="text-blue-400 hover:underline text-sm flex items-center gap-2"
          >
            Send an email <span>→</span>
          </a>

          <a
            href="https://github.com/preeyankakc037"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm flex items-center gap-2"
          >
            See what I'm building <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
