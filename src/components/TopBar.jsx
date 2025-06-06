// src/components/TopBarTabs.jsx
export default function TopBarTabs({ selected, onSelect }) {
  const tabs = ["Most Recent", "Feed", "News", "Making Waves"];
  return (
    <div className="flex gap-6 px-6 pt-4 pb-3 border-b border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelect(tab)}
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            selected === tab
              ? "bg-yellow-400 text-black shadow"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
