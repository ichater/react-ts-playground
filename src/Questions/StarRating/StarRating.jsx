import React, { useState } from "react";
import { Star } from "./Star";
import StarStyle from "./StarRating.module.css";

export default function StarRating({ totalStars, filledStars }) {
  const [starState, setStarState] = useState({ totalStars, filledStars });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={StarStyle.starContainer}>
      {Array.from({ length: starState.totalStars }, (_, index) => (
        <button
          key={index}
          onMouseEnter={() => setHoveredIndex(index + 1)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() =>
            setStarState((state) => ({ ...state, filledStars: index }))
          }
        >
          <Star
            filled={
              hoveredIndex
                ? index >= hoveredIndex
                : index > starState.filledStars
            }
          />
        </button>
      ))}
    </div>
  );
}
