"use client";

import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import { useState, useEffect } from "react";

// Componente del Carrousel para el Header
export const HeaderCarousel = () => {
  const images = [
    '/img/hero1.png', // Asegúrate de que las imágenes estén en la carpeta public
    '/img/hero2.png',
    '/img/hero3.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-md">
      <img
        src={images[currentImageIndex]}
        alt={`Hero ${currentImageIndex}`}
        className="w-full h-96 object-cover transition duration-500 ease-in-out rounded-md"
      />


    </div>
  );
};

const Banner = ({ title, description, imageUrl }) => {
  return (
    <div
      className="flex flex-col items-start justify-center h-64 text-left p-5 rounded-md overflow-hidden relative"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 rounded-md"></div>
      <div className="relative z-10 p-5">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <Link
          href="/members"
          className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const AboutUsBanner = () => {
  return (
    <div className="mb-10">
      <div
        className="flex flex-col items-start justify-center h-64 text-left p-5 rounded-md overflow-hidden relative"
        style={{
          backgroundImage:
            "url('https://www.foronuclear.org/wp-content/uploads/2010/06/atomo-y-electrones-854x465.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-md"></div>
        <div className="relative z-10 p-5">
          <h3 className="text-xl font-bold text-white mb-2">About Us</h3>
          <p className="text-gray-300 mb-4">
            The Medical Physics Alumni Association is a community of
            professionals dedicated to advancing medical physics through
            collaboration and education.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

// Mantén la exportación por defecto de la función Post
export default function Post({ posts }) {
  return (
    <>
      {posts && (
        <Container>
          {/* Usamos el HeaderCarousel aquí */}
          <HeaderCarousel />

          {/* Nuevos Banners en Dos Columnas */}
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <Banner
              title="Do You Want to Be a Member?"
              description="Being an active member of the MMPAA involves proactive engagement and contribution to the collective pursuit of knowledge."
              imageUrl="https://example.com/membership-banner.jpg"
            />
            <Banner
              title="Active Members"
              description="An active member catalyzes the association’s mission, driving innovation, and propelling scientific inquiry forward through sustained dedication and involvement."
              imageUrl="https://example.com/active-members-banner.jpg"
            />
          </div>

          {/* About Us Banner */}
          <div className="mt-10">
            <AboutUsBanner />
          </div>

          {/* Lista de posts */}
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
            {posts.slice(0, 2).map((post) => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {posts.slice(2, 14).map((post) => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>

          {/* Link al archivo */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            >
              <span>View all Announcements</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}