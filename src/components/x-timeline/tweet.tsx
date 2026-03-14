"use client";

import { useState } from "react";
import {
  ReplyIcon,
  RetweetIcon,
  HeartIcon,
  HeartFilledIcon,
  ViewsIcon,
  ShareIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
  VerifiedBadge,
  MoreHorizontalIcon,
  GrokIcon,
} from "./icons";
import { type Tweet } from "@/data/tweets";
import { formatNumber, getInitials } from "@/data/tweets";

interface TweetCardProps {
  tweet: Tweet;
  index: number;
}

export function TweetCard({ tweet, index }: TweetCardProps) {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [bookmarked, setBookmarked] = useState(tweet.bookmarked);
  const [likeCount, setLikeCount] = useState(tweet.likes);
  const [retweetCount, setRetweetCount] = useState(tweet.retweets);
  const [animateHeart, setAnimateHeart] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setAnimateHeart(true);
      setTimeout(() => setAnimateHeart(false), 500);
    }
    setLiked(!liked);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  const handleRetweet = () => {
    setRetweeted(!retweeted);
    setRetweetCount((c) => (retweeted ? c - 1 : c + 1));
  };

  return (
    <article
      className="animate-fadeUp border-b border-[#2f3336] px-4 py-3 transition-colors hover:bg-white/[0.03]"
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
    >
      <div className="flex items-start">
        {/* Avatar — 40px, margin-right 12px matching real X */}
        <div className="mr-3 shrink-0">
          <div
            className="flex size-10 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: tweet.avatarColor }}
          >
            {getInitials(tweet.name)}
          </div>
        </div>

        {/* Content column */}
        <div className="min-w-0 flex-1">
          {/* Header row */}
          <div className="flex items-start justify-between">
            <div className="flex min-w-0 items-center gap-1 leading-5">
              <span className="truncate text-[15px] font-bold leading-5 text-[#e7e9ea]">
                {tweet.name}
              </span>
              {tweet.verified && (
                <VerifiedBadge className="size-[18px] shrink-0 text-[#1d9bf0]" />
              )}
              <span className="truncate text-[15px] leading-5 text-[#71767b]">
                @{tweet.handle}
              </span>
              <span className="shrink-0 text-[15px] leading-5 text-[#71767b]">·</span>
              <span className="shrink-0 text-[15px] leading-5 text-[#71767b] hover:underline">
                {tweet.time}
              </span>
            </div>
            {/* Grok + More buttons */}
            <div className="-mt-0.5 -mr-2 flex items-center">
              <button className="group/grok rounded-full p-1 transition-colors hover:bg-[#1d9bf0]/10">
                <GrokIcon className="size-4 text-[#71767b] transition-colors group-hover/grok:text-[#1d9bf0]" />
              </button>
              <button className="group/more rounded-full p-1 transition-colors hover:bg-[#1d9bf0]/10">
                <MoreHorizontalIcon className="size-[18px] text-[#71767b] transition-colors group-hover/more:text-[#1d9bf0]" />
              </button>
            </div>
          </div>

          {/* Tweet text */}
          <div className="text-[15px] leading-5 text-[#e7e9ea] whitespace-pre-line">
            {tweet.content}
          </div>

          {/* Action bar — matches real X layout */}
          <div className="-ml-2 mt-1 flex items-center">
            {/* Reply — flex-grow */}
            <div className="flex flex-1">
              <button className="group/reply flex items-center">
                <div className="rounded-full p-2 transition-colors group-hover/reply:bg-[#1d9bf0]/10">
                  <ReplyIcon className="size-[18px] text-[#71767b] transition-colors group-hover/reply:text-[#1d9bf0]" />
                </div>
                <span className="min-w-[1ch] text-[13px] leading-4 text-[#71767b] transition-colors group-hover/reply:text-[#1d9bf0]">
                  {formatNumber(tweet.replies)}
                </span>
              </button>
            </div>

            {/* Retweet — flex-grow */}
            <div className="flex flex-1">
              <button
                className="group/rt flex items-center"
                onClick={handleRetweet}
              >
                <div className="rounded-full p-2 transition-colors group-hover/rt:bg-[#00ba7c]/10">
                  <RetweetIcon
                    className={`size-[18px] transition-colors group-hover/rt:text-[#00ba7c] ${
                      retweeted ? "text-[#00ba7c]" : "text-[#71767b]"
                    }`}
                  />
                </div>
                <span
                  className={`min-w-[1ch] text-[13px] leading-4 transition-colors group-hover/rt:text-[#00ba7c] ${
                    retweeted ? "text-[#00ba7c]" : "text-[#71767b]"
                  }`}
                >
                  {formatNumber(retweetCount)}
                </span>
              </button>
            </div>

            {/* Like — flex-grow */}
            <div className="flex flex-1">
              <button
                className="group/like flex items-center"
                onClick={handleLike}
              >
                <div className="rounded-full p-2 transition-colors group-hover/like:bg-[#f91880]/10">
                  {liked ? (
                    <HeartFilledIcon
                      className={`size-[18px] text-[#f91880] ${
                        animateHeart ? "animate-heartPop" : ""
                      }`}
                    />
                  ) : (
                    <HeartIcon className="size-[18px] text-[#71767b] transition-colors group-hover/like:text-[#f91880]" />
                  )}
                </div>
                <span
                  className={`min-w-[1ch] text-[13px] leading-4 transition-colors group-hover/like:text-[#f91880] ${
                    liked ? "text-[#f91880]" : "text-[#71767b]"
                  }`}
                >
                  {formatNumber(likeCount)}
                </span>
              </button>
            </div>

            {/* Views — flex-grow */}
            <div className="flex flex-1">
              <button className="group/views flex items-center">
                <div className="rounded-full p-2 transition-colors group-hover/views:bg-[#1d9bf0]/10">
                  <ViewsIcon className="size-[18px] text-[#71767b] transition-colors group-hover/views:text-[#1d9bf0]" />
                </div>
                <span className="min-w-[1ch] text-[13px] leading-4 text-[#71767b] transition-colors group-hover/views:text-[#1d9bf0]">
                  {formatNumber(tweet.views)}
                </span>
              </button>
            </div>

            {/* Bookmark + Share — no flex-grow, pinned right */}
            <div className="flex items-center">
              <button
                className="group/bm rounded-full p-2 transition-colors hover:bg-[#1d9bf0]/10"
                onClick={() => setBookmarked(!bookmarked)}
              >
                {bookmarked ? (
                  <BookmarkFilledIcon className="size-[18px] text-[#1d9bf0]" />
                ) : (
                  <BookmarkIcon className="size-[18px] text-[#71767b] transition-colors group-hover/bm:text-[#1d9bf0]" />
                )}
              </button>
              <button className="group/share rounded-full p-2 transition-colors hover:bg-[#1d9bf0]/10">
                <ShareIcon className="size-[18px] text-[#71767b] transition-colors group-hover/share:text-[#1d9bf0]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
