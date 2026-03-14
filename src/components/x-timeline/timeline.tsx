"use client";

import { useState } from "react";
import { tweets } from "@/data/tweets";
import { TweetCard } from "./tweet";
import {
  XLogo,
  HomeIcon,
  SearchIcon,
  BellIcon,
  MailIcon,
  CommunitiesIcon,
  ProfileIcon,
  MoreIcon,
  GrokIcon,
  PostIcon,
} from "./icons";

const NAV_ITEMS = [
  { icon: HomeIcon, label: "Home", active: true },
  { icon: SearchIcon, label: "Explore", active: false },
  { icon: BellIcon, label: "Notifications", active: false },
  { icon: MailIcon, label: "Messages", active: false },
  { icon: GrokIcon, label: "Grok", active: false },
  { icon: CommunitiesIcon, label: "Communities", active: false },
  { icon: ProfileIcon, label: "Profile", active: false },
  { icon: MoreIcon, label: "More", active: false },
];

const TRENDING = [
  { category: "Motivation · Trending", title: "Discipline", posts: "12.4K posts" },
  { category: "Self Improvement · Trending", title: "5AM Club", posts: "8.2K posts" },
  { category: "Fitness · Trending", title: "#NoExcuses", posts: "24.1K posts" },
  { category: "Business · Trending", title: "Side Hustle", posts: "6.8K posts" },
  { category: "Mindset · Trending", title: "Comfort Zone", posts: "9.3K posts" },
];

const SUGGESTED = [
  { name: "David Goggins", handle: "davidgoggins", color: "#f91880" },
  { name: "Sam Altman", handle: "sama", color: "#1d9bf0" },
  { name: "Naval", handle: "naval", color: "#7856ff" },
];

export function XTimeline() {
  const [activeTab, setActiveTab] = useState<"foryou" | "following">("foryou");

  return (
    <div className="hide-scrollbar flex min-h-screen justify-center bg-black text-[#e7e9ea]">
      {/* Left Sidebar — hidden on mobile */}
      <aside className="sticky top-0 hidden h-screen flex-col items-end px-2 lg:flex xl:w-[275px]">
        <div className="flex h-full flex-col items-start gap-0.5 py-1 xl:w-[230px]">
          {/* X Logo */}
          <div className="mb-1 rounded-full p-3 transition-colors hover:bg-white/10">
            <XLogo className="size-7" />
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-5 rounded-full p-3 text-xl transition-colors hover:bg-white/10 xl:pr-6"
              >
                <item.icon
                  className={`size-[26px] ${item.active ? "font-bold" : ""}`}
                />
                <span
                  className={`hidden xl:inline ${
                    item.active ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Post button */}
          <button className="mt-4 w-full rounded-full bg-[#1d9bf0] py-3 text-[17px] font-bold text-white transition-colors hover:bg-[#1a8cd8]">
            <span className="hidden xl:inline">Post</span>
            <PostIcon className="mx-auto size-6 xl:hidden" />
          </button>
        </div>
      </aside>

      {/* Main Feed */}
      <main className="w-full max-w-[600px] border-x border-[#2f3336]">
        {/* Sticky header */}
        <div className="sticky top-0 z-10 border-b border-[#2f3336] bg-black/65 backdrop-blur-md">
          <div className="flex">
            <button
              onClick={() => setActiveTab("foryou")}
              className="relative flex flex-1 items-center justify-center py-4 text-[15px] font-medium transition-colors hover:bg-white/10"
            >
              <span
                className={
                  activeTab === "foryou"
                    ? "font-bold text-[#e7e9ea]"
                    : "text-[#71767b]"
                }
              >
                For you
              </span>
              {activeTab === "foryou" && (
                <div className="absolute bottom-0 h-1 w-14 rounded-full bg-[#1d9bf0]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("following")}
              className="relative flex flex-1 items-center justify-center py-4 text-[15px] font-medium transition-colors hover:bg-white/10"
            >
              <span
                className={
                  activeTab === "following"
                    ? "font-bold text-[#e7e9ea]"
                    : "text-[#71767b]"
                }
              >
                Following
              </span>
              {activeTab === "following" && (
                <div className="absolute bottom-0 h-1 w-16 rounded-full bg-[#1d9bf0]" />
              )}
            </button>
          </div>
        </div>

        {/* Tweets */}
        <div>
          {tweets.map((tweet, i) => (
            <TweetCard key={tweet.id} tweet={tweet} index={i} />
          ))}
        </div>
      </main>

      {/* Right Sidebar — hidden on smaller screens */}
      <aside className="sticky top-0 hidden h-screen w-[350px] flex-col gap-4 overflow-y-auto px-6 py-3 xl:flex">
        {/* Search */}
        <div className="sticky top-0 bg-black pb-3 pt-1">
          <div className="flex items-center gap-3 rounded-full border border-[#2f3336] bg-[#202327] px-4 py-2.5 focus-within:border-[#1d9bf0] focus-within:bg-black">
            <SearchIcon className="size-[18px] text-[#71767b]" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-[15px] text-[#e7e9ea] placeholder-[#71767b] outline-none"
            />
          </div>
        </div>

        {/* What's happening */}
        <div className="rounded-2xl border border-[#2f3336] bg-[#16181c]">
          <h2 className="px-4 pt-3 pb-2 text-xl font-extrabold text-[#e7e9ea]">
            What&apos;s happening
          </h2>
          {TRENDING.map((item) => (
            <button
              key={item.title}
              className="flex w-full flex-col px-4 py-3 transition-colors hover:bg-white/[0.03]"
            >
              <span className="text-[13px] text-[#71767b]">
                {item.category}
              </span>
              <span className="text-[15px] font-bold text-[#e7e9ea]">
                {item.title}
              </span>
              <span className="text-[13px] text-[#71767b]">{item.posts}</span>
            </button>
          ))}
          <button className="w-full rounded-b-2xl px-4 py-3 text-left text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03]">
            Show more
          </button>
        </div>

        {/* Who to follow */}
        <div className="rounded-2xl border border-[#2f3336] bg-[#16181c]">
          <h2 className="px-4 pt-3 pb-2 text-xl font-extrabold text-[#e7e9ea]">
            Who to follow
          </h2>
          {SUGGESTED.map((user) => (
            <div
              key={user.handle}
              className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-white/[0.03]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: user.color }}
                >
                  {user.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-[#e7e9ea] hover:underline">
                    {user.name}
                  </span>
                  <span className="text-[15px] text-[#71767b]">
                    @{user.handle}
                  </span>
                </div>
              </div>
              <button className="rounded-full bg-[#eff3f4] px-4 py-1.5 text-sm font-bold text-[#0f1419] transition-colors hover:bg-[#d7dbdc]">
                Follow
              </button>
            </div>
          ))}
          <button className="w-full rounded-b-2xl px-4 py-3 text-left text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03]">
            Show more
          </button>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 px-4 pb-4 text-[13px] text-[#71767b]">
          <span className="hover:underline">Terms of Service</span>
          <span className="hover:underline">Privacy Policy</span>
          <span className="hover:underline">Cookie Policy</span>
          <span className="hover:underline">Accessibility</span>
          <span className="hover:underline">Ads info</span>
          <span>More ···</span>
          <span>© 2026 X Corp.</span>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-[#2f3336] bg-black py-2 lg:hidden">
        <button className="rounded-full p-3 transition-colors hover:bg-white/10">
          <HomeIcon className="size-[26px]" />
        </button>
        <button className="rounded-full p-3 transition-colors hover:bg-white/10">
          <SearchIcon className="size-[26px]" />
        </button>
        <button className="rounded-full p-3 transition-colors hover:bg-white/10">
          <BellIcon className="size-[26px]" />
        </button>
        <button className="rounded-full p-3 transition-colors hover:bg-white/10">
          <MailIcon className="size-[26px]" />
        </button>
      </nav>
    </div>
  );
}
