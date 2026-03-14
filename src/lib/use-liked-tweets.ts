"use client";

import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "liked-tweets";

function loadLikedIds(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

function saveLikedIds(ids: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

export function useLikedTweets() {
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  // Load from localStorage on mount
  useEffect(() => {
    setLikedIds(loadLikedIds());
  }, []);

  const toggleLike = useCallback((tweetId: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(tweetId)) {
        next.delete(tweetId);
      } else {
        next.add(tweetId);
      }
      saveLikedIds(next);
      return next;
    });
  }, []);

  const isLiked = useCallback(
    (tweetId: string) => likedIds.has(tweetId),
    [likedIds]
  );

  return { likedIds, toggleLike, isLiked };
}
