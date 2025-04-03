"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Projects = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const getVisibleIndices = () => {
    const leftIndex = (currentSlide - 1 + slides.length) % slides.length;
    const rightIndex = (currentSlide + 1) % slides.length;
    return [leftIndex, currentSlide, rightIndex];
  };

  const nextSlide = () => {
    if (isAnimating) return; // Prevent clicking during animation
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return; // Prevent clicking during animation
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Reset animation direction after animation completes
  useEffect(() => {
    if (direction) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDirection("");
        setIsAnimating(false);
      }, 500); // Match this to your animation duration
      return () => clearTimeout(timer);
    }
  }, [direction, currentSlide]);

  // Helper function to determine position class
  const getPositionClass = (index, visibleIndices) => {
    if (index === visibleIndices[0]) return "slide-left";
    if (index === visibleIndices[1]) return "slide-center";
    if (index === visibleIndices[2]) return "slide-right";
    return "slide-hidden";
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative w-screen z-10">
      <div className="flex justify-center overflow-hidden">
        {getVisibleIndices().map((index) => (
          <div
            key={index}
            id="slide"
            className={`border-2 border-gray-300 rounded-4xl p-8 relative
                      transition-all duration-500 ease-in-out w-[90vw] max-w-[800px]
                      ${index === visibleIndices[1] ? "bg-gray-50" : "bg-gray-400"}
                      ${getPositionClass(index, visibleIndices)}`}
          >
            {/* Top-left dot */}
            <div className="rounded-full bg-gray-300 absolute top-[18px] left-[18px] w-3 h-3">&nbsp;</div>
            {/* Top-right dot */}
            <div className="rounded-full bg-gray-300 absolute top-[18px] right-[18px] w-3 h-3">&nbsp;</div>
            {/* Bottom-left dot */}
            <div className="rounded-full bg-gray-300 absolute bottom-[18px] left-[18px] w-3 h-3">&nbsp;</div>
            {/* Bottom-right dot */}
            <div className="rounded-full bg-gray-300 absolute bottom-[18px] right-[18px] w-3 h-3">&nbsp;</div>
            <div className="border-1 border-gray-300 rounded-2xl p-2 bg-gray-100 shadow-xl">
              <Image
                src="/hero.png"
                alt="Hero"
                width={1200}
                height={1200}
                className="w-full h-auto min-w-[600px]"
                priority
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="z-12 absolute left-18 top-1/2 -translate-y-1/2 bg-gray-200 text-black px-4 py-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="z-12 absolute right-18 top-1/2 -translate-y-1/2 bg-gray-200 text-black px-4 py-2 rounded-full"
      >
        →
      </button>

      <style jsx>{`
        .slide-left {
          transform: translateX(-5%) scale(0.9);
          opacity: 0.7;
          z-index: 5;
          ${direction === "right" ? "animation: slideOutLeft 500ms ease-in-out forwards;" : ""}
          ${direction === "left" ? "animation: slideInCenter 500ms ease-in-out forwards;" : ""}
        }

        .slide-center {
          transform: translateX(0) scale(1);
          opacity: 1;
          z-index: 10;
          ${direction === "right" ? "animation: slideOutCenter 500ms ease-in-out forwards;" : ""}
          ${direction === "left" ? "animation: slideOutCenter 500ms ease-in-out forwards;" : ""}
        }

        .slide-right {
          transform: translateX(5%) scale(0.9);
          opacity: 0.7;
          z-index: 5;
          ${direction === "right" ? "animation: slideInCenter 500ms ease-in-out forwards;" : ""}
          ${direction === "left" ? "animation: slideOutRight 500ms ease-in-out forwards;" : ""}
        }

        .slide-hidden {
          opacity: 0;
          transform: scale(0.8);
          pointer-events: none;
        }

        @keyframes slideInCenter {
          from {
            transform: translateX(${direction === "right" ? "5%" : "-5%"}) scale(0.9);
            opacity: 0.7;
            z-index: 5;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
            z-index: 10;
          }
        }

        @keyframes slideOutCenter {
          from {
            transform: translateX(0) scale(1);
            opacity: 1;
            z-index: 10;
          }
          to {
            transform: translateX(${direction === "right" ? "-5%" : "5%"}) scale(0.9);
            opacity: 0.7;
            z-index: 5;
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(-5%) scale(0.9);
            opacity: 0.7;
          }
          to {
            transform: translateX(-10%) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(5%) scale(0.9);
            opacity: 0.7;
          }
          to {
            transform: translateX(10%) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
