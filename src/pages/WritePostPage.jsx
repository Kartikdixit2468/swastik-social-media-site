import React, { Profiler, useState } from "react";
import "@/assets/css/WritePostPage.css";
import ProfileImg from "@/assets/Vector.png";

function WritePostPage() {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibility, setVisibility] = useState("Public");

  const categories = [
    "Friends",
    "Hopes",
    "Bullying",
    "Work",
    "Health",
    "Helpful Tips",
    "Education",
    "Positive",
    "Well-being",
    "My Story",
    "Poetry",
    "Resilience",
    "Challenge",
    "Self-care",
    "Guidance",
    "Mentoring",
    "Gaming",
    "Emotions",
    "Life Hack",
    "Ask Community",
    "Others",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategoryModal(false);
  };

  return (
    // <div className="main-container">

    <div className="write-post-container">
      <div className="post-card">
        <div className="post-header">
          <img src={ProfileImg} alt="profile" className="profile-pic" />
          <select
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
            className="visibility"
          >
            <option>Public</option>
            <option>Private</option>
          </select>
          <span className="prompt-text">Prompts 💡</span>
        </div>

        <textarea placeholder="Say Something..." className="post-textarea" />
      </div>
      <div className="post-footer">
        <button
          onClick={() => setShowCategoryModal(true)}
          className="category-btn"
        >
          + {selectedCategory || "Category"}
        </button>
        <button className="post-btn">➔</button>
      </div>

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="category-modal">
          <div className="category-list">
            {categories.map((cat) => (
              <div
                key={cat}
                className="category-option"
                onClick={() => handleCategorySelect(cat)}
              >
                {cat}
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowCategoryModal(false)}
            className="close-modal"
          >
            Close
          </button>
        </div>
      )}
    </div>
    // </div>
  );
}

export default WritePostPage;
