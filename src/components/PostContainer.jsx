// src/components/FeedContainer.jsx
import PostCard from "./PostCard";

const mockPosts = [
  {
    username: "Username",
    time: "2m",
    content:
      "Here’s a preview of the post content that provides a glimpse into what the post is about and will look like.",
  },
  {
    username: "Username",
    time: "2m",
    content:
      "Here’s a preview of the post content that provides a glimpse into what the post is about and will look like.",
  },
  {
    username: "Username",
    time: "2m",
    content:
      "Here’s a preview of the post content that provides a glimpse into what the post is about and will look like.",
  },
];

export default function PostContainer() {
  return (
    <div className="overflow-y-auto h-full px-6 py-4">
      {mockPosts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
