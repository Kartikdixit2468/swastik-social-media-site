// src/components/PostCard.jsx
import { FaGlobe, FaHeart, FaComment, FaBookmark } from "react-icons/fa";

export default function PostCard({ username, time, content }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-full" />
          <div>
            <p className="font-semibold">{username}</p>
            <p className="text-xs text-gray-500">{time}</p>
          </div>
        </div>
        <div className="text-sm flex items-center gap-1 text-gray-500">
          <FaGlobe />
          Public
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-800">{content}</p>

      <div className="flex gap-6 mt-4 text-gray-600 text-sm">
        <FaHeart className="cursor-pointer" />
        <FaComment className="cursor-pointer" />
        <FaBookmark className="cursor-pointer" />
      </div>
    </div>
  );
}
