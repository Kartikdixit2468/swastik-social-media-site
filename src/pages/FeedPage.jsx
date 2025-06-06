// src/pages/FeedPage.jsx
import { useState } from "react";
import TopBarTabs from "@/components/TopBar";
import FeedContainer from "@/components/PostContainer";

export default function FeedPage() {
  const [selectedTab, setSelectedTab] = useState("Most Recent");

  return (
    <div className="flex-1 bg-[#e9f0ed] rounded-r-3xl flex flex-col">
      <TopBarTabs selected={selectedTab} onSelect={setSelectedTab} />
      <FeedContainer />
    </div>
  );
}
