'use client'
import React, { useState } from 'react';

/**
 * Props for the StarRating component
 * @typedef {Object} StarRatingProps
 * @property {number} [rating=0] - The current rating value (0-5)
 * @property {number} [totalStars=5] - Total number of stars to display
 * @property {boolean} [interactive=false] - Whether users can change the rating by clicking
 * @property {function} [onChange] - Callback function triggered when rating changes (if interactive)
 * @property {string} [fillColor="#FB6514"] - Color for filled stars
 * @property {string} [emptyColor="#FEB273"] - Color for empty/outlined stars
 * @property {string} [size="24px"] - Size of the stars
 * @property {string} [className=""] - Additional CSS classes
 */
interface StarRatingProps {
  rating?: number;
  totalStars?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
  fillColor?: string;
  emptyColor?: string;
  size?: string;
  className?: string;
}

/**
 * A star rating component that displays filled and outlined stars based on a rating value
 */
const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  totalStars = 5,
  interactive = false,
  onChange,
  fillColor = "#FB6514",
  emptyColor = "#FEB273",
  size = "24px",
  className = "",
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  // Ensure rating is within valid range
  const validRating = Math.max(0, Math.min(rating, totalStars));
  
  // Current display rating (either the hovered value or the actual rating)
  const displayRating = hoverRating > 0 ? hoverRating : validRating;
  
  const handleMouseEnter = (index: number) => {
    if (interactive) {
      setHoverRating(index);
    }
  };
  
  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(0);
    }
  };
  
  const handleClick = (index: number) => {
    if (interactive && onChange) {
      onChange(index);
    }
  };

  return (
    <div className={`flex ${className}`}>
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;
        const isFilled = starIndex <= displayRating;
        
        return (
          <div
            key={index}
            className={`cursor-${interactive ? 'pointer' : 'default'}`}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
            style={{ padding: '2px' }}
          >
            {isFilled ? (
              // Filled star - no border
              <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={fillColor}
                className="transition-colors duration-200"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                />
              </svg>
            ) : (
              // Empty star - with border
              <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={emptyColor}
                strokeWidth="1.5"
                className="transition-colors duration-200"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating