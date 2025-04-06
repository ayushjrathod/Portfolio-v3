"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Projects = () => {
  const slides = [
    {
      id: 1,
      image: "https://res.cloudinary.com/cnserver/image/upload/t_projects_section/twtykmlpjspyubqkayk3",
      alt: "Advista Home Page",
      title: "Advista- AI-Powered Advertising and Marketing Research Platform",
      description:
        "ADVISTA identifies user pain points and emotional triggers by aggregating data from platforms like Google, YouTube, Reddit, Quora, blogs, forums, social media, and app reviews. It analyzes competitor ads to surface high-performing hooks, CTAs, and content formats aligned with specific audiences and ad objectives.",
      demo: "",
      github: "https://github.com/ayushjrathod/Advista",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/cnserver/image/upload/t_projects_section/vva14psdqbet8dnmm1vh",
      alt: "Nyaybodh Home Page",
      title: "NyayaBodh - AI-Powered Legal Research Engine",
      description:
        "NyaayBodh streamlines legal research and document handling using AI. It empowers users with fast, intelligent access to legal information and contract generation tools.",
      demo: "",
      github: "https://github.com/ayushjrathod/NyayaBodh",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/cnserver/image/upload/t_projects_section/p3ptajvvqag2nsjksd4j",
      title: "AuditIQ - AI-Powered Recipts Fraud Detection",
      description:
        "AuditIQ automates expense submission reviews with integrated AI-driven fraud detection. When anomalies are detected, it initiates an intelligent voice-based interrogation via Coco, the custom voice assistant.",
      alt: "AuditIQ Home Page",
      demo: "",
      github: "https://github.com/ayushjrathod/AuditIQ",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const getVisibleIndices = () => {
    const leftIndex = (currentSlide - 1 + slides.length) % slides.length;
    const rightIndex = (currentSlide + 1) % slides.length;
    return [leftIndex, currentSlide, rightIndex];
  };

  const nextSlide = useCallback(() => {
    if (isAnimating) return; // Prevent clicking during animation
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [isAnimating, slides.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return; // Prevent clicking during animation
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [isAnimating, slides.length]);

  // Handle horizontal scroll to navigate carousel
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      // Check if the scroll is primarily horizontal or if it's a trackpad horizontal gesture
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > 5) {
        event.preventDefault();
        if (event.deltaX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    const carouselElement = document.querySelector(".relative.w-screen");
    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheel as EventListener, { passive: false });
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheel as EventListener);
      }
    };
  }, [isAnimating, nextSlide, prevSlide]); // Added missing dependencies

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
  const getPositionClass = (index: number, visibleIndices: number[]): string => {
    if (index === visibleIndices[0]) return "slide-left";
    if (index === visibleIndices[1]) return "slide-center";
    if (index === visibleIndices[2]) return "slide-right";
    return "slide-hidden";
  };

  // Handle click on a slide
  const handleSlideClick = (position: string) => {
    if (isAnimating) return; // Prevent clicking during animation

    if (position === "slide-left") {
      prevSlide();
    } else if (position === "slide-right") {
      nextSlide();
    }
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative w-screen z-10">
      <div className="flex justify-center overflow-hidden p-12">
        {getVisibleIndices().map((index) => {
          const positionClass = getPositionClass(index, visibleIndices);
          return (
            <div
              key={slides[index].id}
              id="slide"
              onClick={() => handleSlideClick(positionClass)}
              className={`border-2 border-gray-300 dark:border-gray-600 rounded-4xl p-4 md:p-8 relative
                        transition-all duration-500 ease-in-out w-[95vw] md:w-[90vw] max-w-[800px] h-full
                        ${index === visibleIndices[1] ? "bg-gray-50 dark:bg-gray-800" : "bg-gray-400 dark:bg-gray-700"}
                        ${positionClass}`}
            >
              {/* Top-left dot */}
              <div className="rounded-full bg-gray-300 dark:bg-gray-500 absolute top-[10px] md:top-[18px] left-[10px] md:left-[18px] w-2 md:w-3 h-2 md:h-3">
                &nbsp;
              </div>
              {/* Top-right dot */}
              <div className="rounded-full bg-gray-300 dark:bg-gray-500 absolute top-[10px] md:top-[18px] right-[10px] md:right-[18px] w-2 md:w-3 h-2 md:h-3">
                &nbsp;
              </div>
              {/* Bottom-left dot */}
              <div className="rounded-full bg-gray-300 dark:bg-gray-500 absolute bottom-[10px] md:bottom-[18px] left-[10px] md:left-[18px] w-2 md:w-3 h-2 md:h-3">
                &nbsp;
              </div>
              {/* Bottom-right dot */}
              <div className="rounded-full bg-gray-300 dark:bg-gray-500 absolute bottom-[10px] md:bottom-[18px] right-[10px] md:right-[18px] w-2 md:w-3 h-2 md:h-3">
                &nbsp;
              </div>
              <div className="border-1 border-gray-300 dark:border-gray-600 rounded-2xl p-2 bg-gray-100 dark:bg-gray-900 shadow-xl relative group">
                <Image
                  src={slides[index].image}
                  alt={slides[index].alt}
                  width={1200}
                  height={1200}
                  className="w-full h-fit min-w-[300px] md:min-w-[600px]"
                  priority
                />

                {/* Hover overlay with title and description */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 rounded-2xl">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{slides[index].title}</h3>
                  <p className="text-white text-sm md:text-base">{slides[index].description}</p>
                </div>

                {/* Project links */}
                <div className="flex justify-between w-full pr-22 absolute">
                  <a
                    href={slides[index].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-medium py-2 px-3 md:px-4 rounded-lg transition-colors duration-300 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                  >
                    Demo
                  </a>
                  <a
                    href={slides[index].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-medium py-2 px-3 md:px-4 rounded-lg transition-colors duration-300 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={prevSlide}
        className="cursor-pointer z-12 absolute left-18 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="cursor-pointer z-12 absolute right-18 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        →
      </button>

      <style jsx>{`
        .slide {
          transition: all 0.3s ease-in-out;
          z-index: 5;
          opacity: 0.7;
          transform: scale(0.9);
          cursor: pointer;
        }

        .slide-left {
          transform: translateX(-5%);
        }
        .slide-right {
          transform: translateX(5%);
        }

        .slide-center {
          transform: translateX(0) scale(1);
          opacity: 1;
          z-index: 10;
        }

        .slide-hidden {
          opacity: 0;
          transform: scale(0.8);
          pointer-events: none;
        }

        ${direction &&
        `
    .slide-left {
      animation: ${direction === "right" ? "slide-out" : "slide-in"} 500ms forwards;
    }
    .slide-center {
      animation: slide-center-out 500ms forwards;
    }
    .slide-right {
      animation: ${direction === "right" ? "slide-in" : "slide-out"} 500ms forwards;
    }
  `}

        @keyframes slide-in {
          from {
            transform: translateX(${direction === "right" ? "5%" : "-5%"});
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-out {
          to {
            transform: translateX(${direction === "right" ? "-10%" : "10%"}) scale(${direction === "right" ? 0.8 : 0.8});
            opacity: 0;
          }
        }

        @keyframes slide-center-out {
          to {
            transform: translateX(${direction === "right" ? "-5%" : "5%"}) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
