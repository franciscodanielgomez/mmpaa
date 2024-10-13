"use client";

import React, { useState, useEffect } from 'react';

const FullScreenCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[36rem] bg-gray-200 flex items-center justify-center">
        <p className="text-2xl text-gray-600">No images available</p>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full h-[36rem] overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
            <div className="text-white w-full max-w-2xl ml-8 sm:ml-16 lg:ml-24">
              <h2 className="text-4xl font-bold mb-4 text-left">{image.title}</h2>
              <p className="text-xl mb-6 text-left">{image.description}</p>
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  type="button"
                  className="py-2 px-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 dark:bg-white dark:text-black"
                >
                  Join Us
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full w-10 h-10 flex items-center justify-center transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            } md:opacity-100`}
            aria-label="Previous slide"
          >
            &#9664;
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full w-10 h-10 flex items-center justify-center transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            } md:opacity-100`}
            aria-label="Next slide"
          >
            &#9654;
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FullScreenCarousel;