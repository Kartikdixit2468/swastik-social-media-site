import React from "react";
import profile_img from '/src/assets/Vector.png';
import {SideMenu} from "./components/SideMenu";
import FeedPage from "@/pages/FeedPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Globe, Lightbulb, Sparkles } from "lucide-react";


import { FaPen, FaHome, FaEnvelope, FaUsers, FaGraduationCap, FaPoll, FaBell, FaCog } from "react-icons/fa";

const navItems = [
  { label: "Write Post", icon: <FaPen /> },
  { label: "Feed", icon: <FaHome /> },
  { label: "Messages", icon: <FaEnvelope /> },
  { label: "Rooms", icon: <FaUsers /> },
  { label: "Academics", icon: <FaGraduationCap /> },
  { label: "Quizzes & Polls", icon: <FaPoll /> },
  { label: "Notifications", icon: <FaBell /> },
  { label: "Settings", icon: <FaCog /> },
];


export default function   MainPageLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 p-4">
      <div className="bg-[#e9f0ed] w-[85vw] h-[90vh] rounded-3xl shadow-xl flex overflow-hidden">
        <SideMenu navItems={navItems} ProfileImg={profile_img}/>
          <FeedPage/>
        </div>
      </div>
  );
}
