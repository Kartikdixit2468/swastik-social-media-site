import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Globe, Lightbulb, Sparkles } from "lucide-react";

const SideMenu = () => (
  <div className="bg-[#2d3a36] text-white w-64 p-4 rounded-l-2xl">
    <div className="flex flex-col items-center mb-6">
      <div className="w-16 h-16 rounded-full bg-yellow-400 mb-2" />
      <h2 className="text-lg font-semibold">USERNAME</h2>
      <p className="text-sm text-gray-300">username_cs23@workermail</p>
    </div>
    <nav className="space-y-3">
      {[
        "Write Post",
        "Feed",
        "Messages",
        "Rooms",
        "Academics",
        "Quizzes & Polls",
        "Notifications",
        "Settings",
      ].map((item, i) => (
        <div
          key={i}
          className={`py-2 px-4 rounded-lg hover:bg-yellow-500 cursor-pointer ${
            item === "Write Post" ? "bg-white text-black" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </nav>
  </div>
);

const WritePost = () => (
  <div className="flex flex-col w-full h-full px-6 py-4">
    <div className="flex items-center justify-between">
      <ArrowLeft className="text-yellow-600 cursor-pointer" />
      <div className="flex space-x-4">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
      </div>
    </div>

    <Card className="mt-6 shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-yellow-400" />
          <div className="flex items-center space-x-1">
            <Globe className="w-4 h-4" />
            <span className="font-bold underline">Public</span>
          </div>
          <div className="ml-auto flex items-center space-x-2 text-sm text-gray-400">
            <Lightbulb className="w-4 h-4" />
            <span>Prompts</span>
          </div>
        </div>

        <Textarea
          className="mt-4 resize-none border-none focus:ring-0 text-lg"
          placeholder="Say Something..."
        />

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <Button size="icon" variant="outline">
              +
            </Button>
            <Button variant="secondary">Category</Button>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Sparkles className="w-4 h-4" />
            <span>Highlight</span>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default function WritePostLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 p-4">
      <div className="bg-[#e9f0ed] w-[85vw] h-[85vh] rounded-3xl shadow-xl flex overflow-hidden">
        <SideMenu />
        <WritePost />
      </div>
    </div>
  );
}
