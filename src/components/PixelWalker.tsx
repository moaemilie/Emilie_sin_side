"use client";

import { useState, useEffect, useRef } from "react";

type AnimationState = "jumping" | "movingSideways" | "walkingDown";

// Image paths - easy to change later
const IMAGES = {
  stand: "/images/Emilie_pixel_stand.png",
  walkSideways1: "/images/Emilie_pixel_walk_left_1.png", // For walking to the side
  walkSideways2: "/images/Emilie_pixel_walk_left_3.png", // For walking to the side
  walkDown1: "/images/Emilie_pixel_walk_1.png", // For walking down
  walkDown2: "/images/Emilie_pixel_walk_2.png", // For walking down
};

export default function PixelWalker() {
  const [imageIndex, setImageIndex] = useState(0);
  const [animationState, setAnimationState] =
    useState<AnimationState>("jumping");
  const [jumpPhase, setJumpPhase] = useState(0); // 0-7: jump1, jump2, stand, stand, jump1, jump2, stand, stand
  const [sidewaysDistance, setSidewaysDistance] = useState(0);
  const [maxSidewaysDistance, setMaxSidewaysDistance] = useState(0);
  const [isWalkingBackward, setIsWalkingBackward] = useState(false); // Track if walking back to center
  const walkerRef = useRef<HTMLDivElement>(null);
  const accumulatedScrollRef = useRef(0);
  const lastScrollY = useRef(0);

  // Calculate sideways distance based on screen size
  useEffect(() => {
    const calculateMaxDistance = () => {
      // Distance from center (50%) to the left edge of w-2/3 content (16.67%)
      // That's 50% - 16.67% = 33.33% of viewport width
      const distanceInVw = window.innerWidth * 0.3333;
      setMaxSidewaysDistance(distanceInVw);
    };

    calculateMaxDistance();
    window.addEventListener("resize", calculateMaxDistance);
    return () => window.removeEventListener("resize", calculateMaxDistance);
  }, []);

  // Jumping animation - video game style (2 jumps, pause, 2 jumps, pause)
  useEffect(() => {
    if (animationState !== "jumping") return;

    const jumpInterval = setInterval(() => {
      setJumpPhase((prev) => (prev + 1) % 8);
    }, 200); // Slower for visible jumps

    return () => clearInterval(jumpInterval);
  }, [animationState]);

  // Walking sideways animation toggle
  useEffect(() => {
    if (animationState !== "movingSideways") return;

    const walkInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % 2);
    }, 150);

    return () => clearInterval(walkInterval);
  }, [animationState]);

  // Scroll detection and handling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const scrollingDown = e.deltaY > 0;
      const currentScroll = window.scrollY;

      // SCROLLING DOWN
      if (scrollingDown) {
        if (animationState === "jumping") {
          e.preventDefault();
          // Start moving sideways
          setAnimationState("movingSideways");
          setIsWalkingBackward(false); // Walking left
          accumulatedScrollRef.current = 0;
          setSidewaysDistance(0);
          window.scrollTo(0, 0); // Keep at top
        } else if (animationState === "movingSideways") {
          e.preventDefault();
          setIsWalkingBackward(false); // Walking left

          accumulatedScrollRef.current += Math.abs(e.deltaY) * 0.5;
          setSidewaysDistance(
            Math.min(accumulatedScrollRef.current, maxSidewaysDistance),
          );

          window.scrollTo(0, 0); // Keep page at top

          // When reached max distance, switch to walking down
          if (accumulatedScrollRef.current >= maxSidewaysDistance) {
            setAnimationState("walkingDown");
            // Allow scroll to happen naturally now
          }
        }
      }
      // SCROLLING UP
      else {
        if (animationState === "walkingDown" && currentScroll <= 1) {
          e.preventDefault();
          // Start moving back to center
          setAnimationState("movingSideways");
          setIsWalkingBackward(true); // Walking back right
          accumulatedScrollRef.current = maxSidewaysDistance;
          setSidewaysDistance(maxSidewaysDistance);
          window.scrollTo(0, 0);
        } else if (animationState === "movingSideways") {
          e.preventDefault();
          setIsWalkingBackward(true); // Walking right

          accumulatedScrollRef.current -= Math.abs(e.deltaY) * 0.5;
          accumulatedScrollRef.current = Math.max(
            0,
            accumulatedScrollRef.current,
          );
          setSidewaysDistance(accumulatedScrollRef.current);

          window.scrollTo(0, 0); // Keep page at top

          // When back at center, switch to jumping
          if (accumulatedScrollRef.current <= 0) {
            setAnimationState("jumping");
            setIsWalkingBackward(false);
            window.scrollTo(0, 0);
          }
        }
      }

      lastScrollY.current = currentScroll;
    };

    const handleScroll = () => {
      if (animationState === "walkingDown") {
        // Normal scrolling, toggle walking animation
        setImageIndex(Math.floor(window.scrollY / 50) % 2);
      }
    };

    // Always listen to wheel events
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleWheel as any, {
      passive: false,
    });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleWheel as any);
    };
  }, [animationState, maxSidewaysDistance]);

  const getTransform = () => {
    // Base transform to center the image
    const baseTransform = "translate(-50%, -50%)";

    switch (animationState) {
      case "jumping":
        // Video game style jumping: 2 jumps, pause, 2 jumps, pause
        let jumpHeight = 0;
        if (jumpPhase === 0 || jumpPhase === 4) jumpHeight = -30; // First jump of pair
        if (jumpPhase === 1 || jumpPhase === 5) jumpHeight = -35; // Second jump (slightly higher)
        // jumpPhase 2, 3, 6, 7 = standing (0)
        return `${baseTransform} translateY(${jumpHeight}px)`;
      case "movingSideways":
        // Move to the left or back to center
        return `${baseTransform} translateX(-${sidewaysDistance}px)`;
      case "walkingDown":
        // Stay in place at the left edge
        return `${baseTransform} translateX(-${maxSidewaysDistance}px)`;
      default:
        return baseTransform;
    }
  };

  const getCurrentImage = () => {
    switch (animationState) {
      case "jumping":
        return IMAGES.stand;
      case "movingSideways":
        return imageIndex === 0 ? IMAGES.walkSideways1 : IMAGES.walkSideways2;
      case "walkingDown":
        return imageIndex === 0 ? IMAGES.walkDown1 : IMAGES.walkDown2;
      default:
        return IMAGES.stand;
    }
  };

  return (
    <div
      ref={walkerRef}
      className="fixed pointer-events-none z-50"
      style={{
        left: "50%", // Start in the middle horizontally
        top: "50vh", // Start in the middle vertically
        transform: getTransform(),
        transition:
          animationState === "jumping"
            ? "transform 0.15s ease-out"
            : "transform 0.2s linear",
      }}
    >
      <img
        style={{
          transform:
            isWalkingBackward && animationState === "movingSideways"
              ? "scaleX(-1)"
              : "none",
        }}
        src={getCurrentImage()}
        alt="Pixel walker"
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 object-contain"
      />
    </div>
  );
}
