import React, { useState, useEffect } from "react";
import LikeStyle from "./Like.module.css";
import { HeartIcon, SpinnerIcon } from "./icons";

export default function Like() {
  const [likeState, setLikeState] = useState({
    loading: false,
    liked: true,
    error: null,
  });

  const getData = async () => {
    try {
      setLikeState((likeState) => ({
        ...likeState,
        loading: true,
      }));
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: likeState.liked ? "unlike" : "like" }),
        }
      );
      if (!response.ok) {
        const res = await response.json();
        setLikeState((likeState) => ({
          ...likeState,
          loading: false,
          error: "res.error",
        }));
        return;
      }

      setLikeState((likeState) => ({
        ...likeState,
        liked: !likeState.liked,
        error: null,
      }));
    } finally {
      setLikeState((likeState) => ({
        ...likeState,
        loading: false,
      }));
    }
  };

  return (
    <div>
      {likeState.loading ? (
        <button
          className={`${LikeStyle.btn} 
        ${likeState.liked && LikeStyle.liked}`}
          onClick={() => getData()}
        >
          <SpinnerIcon /> Like
        </button>
      ) : (
        <button
          className={`${LikeStyle.btn} 
      ${likeState.liked && LikeStyle.liked}`}
          onClick={() => getData()}
        >
          <HeartIcon /> Like
        </button>
      )}
      {likeState.error ? <p>{likeState.error}</p> : <p>Like Away!</p>}
    </div>
  );
}
