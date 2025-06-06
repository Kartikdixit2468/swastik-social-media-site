
const SideMenu = (props) => {

    const navItems = props.navItems
    const ProfileImg = props.ProfileImg

    return(
  <div className="bg-[#415B5C] text-white w-65 flex flex-col rounded-l-3xl overflow-hidden">
    {/* Profile Section */}
    <div className="bg-[#3B5556] p-8 flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-white mb-2" >
        <img className="p-3" src={ProfileImg} alt="P"/>
        </div>
      <h2 className="text-xl py-2 font-semibold text-white">USERNAME</h2>
      <p className="text-md text-white">username_cs23@workermail</p>
    </div>

    {/* Navigation Items */}
    <nav className="flex flex-col gap-2 p-4 pt-6">
      {navItems.map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-yellow-400 cursor-pointer transition ${
            item.label === "Feed" ? "bg-white text-black font-semibold" : ""
          }`}
        >
          <span className="text-xl text-[#D7A311]">{item.icon}</span>
          <span className="text-lg">{item.label}</span>
        </div>
      ))}
    </nav>
  </div>
)};

export {SideMenu};