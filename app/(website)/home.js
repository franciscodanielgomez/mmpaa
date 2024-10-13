"use client"; // Asegúrate de agregar esto al principio del archivo

import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import the FullScreenCarousel with no SSR
const FullScreenCarousel = dynamic(() => import("@/components/FullScreenCarousel"), { ssr: false });

const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = endValue;
    const range = end - start;
    const incrementTime = duration / range;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, [endValue, duration]);

  return <h3 className="text-3xl font-bold text-brand-primary">{count}+</h3>;
};

export default function Post({ posts }) {
  const carouselImages = [
    {
      src: "/img/hero1.png",
      alt: "Banner 1",
      title: "Welcome to MMPAA",
      description: "This is where we create a master in medical physics community from all over the globe.",
      link: "https://example.com/bienvenido"
    },
    {
      src: "/img/hero2.png",
      alt: "Banner 2",
      title: "Descubre Nuevas Ideas",
      description: "Inspiración para tu día a día",
      link: "https://example.com/descubre"
    },
    {
      src: "/img/hero3.png",
      alt: "Banner 3",
      title: "Únete a Nuestra Comunidad",
      description: "Comparte y aprende con nosotros",
      link: "https://example.com/unete"
    }
  ];

  return (
    <>
      <FullScreenCarousel images={carouselImages} />

      {posts && posts.length > 0 && (
        <Container>
          <div className="my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
                <Counter endValue={75} duration={2000} />
                <p>Active MMPAA Members</p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
                <Counter endValue={30} duration={2000} />
                <p>Activities per year</p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
                <Counter endValue={12} duration={2000} />
                <p>Countries</p>
              </div>
            </div>

            {/* Sección About */}
            <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col justify-center items-start  h-full">
                <h2 className="text-2xl font-bold mb-4">About MMPAA</h2>
                <p className="mb-4">
                  MMPAA es una comunidad dedicada a los profesionales de la física médica. Aquí, promovemos la
                  colaboración y el aprendizaje continuo entre nuestros miembros. Únete a nosotros para explorar nuevas
                  oportunidades y hacer crecer tu carrera.
                </p>
                <a
                  href="/about"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="py-2 px-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 dark:bg-white dark:text-black"
                  >
                    View More
                  </button>
                </a>
              </div>
              <div className="flex justify-center">
                <img
                  src="/img/mmpaa.png"
                  alt="About MMPAA"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>


            <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex justify-center md:order-1 order-2">
                <img
                  src="/img/about.png"
                  alt="About MMPAA"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center items-start h-full md:order-2 order-1">
                <h2 className="text-2xl font-bold mb-4">Records</h2>
                <p className="mb-4">
                  This space offers access to freely available documents, presentations, records, and videos related to
                  the association and medical physics. For inquiries, please contact us.
                </p>
                <a
                  href="/records"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="py-2 px-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 dark:bg-white dark:text-black"
                  >
                    More Records
                  </button>
                </a>
              </div>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-8">Do you want to be a member?</h3>
                <p className="text-gray-700 mb-8">
                  Being an active member of an MMPAA involves more than mere affiliation; it entails proactive
                  engagement
                  and contribution to the collective pursuit of knowledge. Actively participating in conferences,
                  seminars,
                  and collaborative projects fosters intellectual exchange, broadens perspectives, and enhances one’s
                  expertise. Networking with fellow members, sharing insights, and staying abreast of the latest
                  developments enrich the communal fabric. Ultimately, an active member catalyzes the association’s
                  mission,
                  driving innovation, and propelling scientific inquiry forward through sustained dedication and
                  involvement.
                </p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeW2cqW3x4qXOpERSUmnOmP8CW6wGkPybBQAlkCr9WGsqcDWw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <button
                  type="button"
                  className="py-2 px-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 dark:bg-white dark:text-black"
                >
                  Join Us
                </button>
              </a>
            </div>


            <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col justify-center items-start  h-full">
                <h2 className="text-2xl font-bold mb-4">Announcements</h2>
                <p className="mb-4">
                  Our events focus on webinars for MMP graduates and students to share experiences. We plan to host
                  global events soon and are organizing our second webinar, along with a newsletter featuring interviews
                  and articles on medical physics developments.
                </p>


              </div>

              <div className="flex justify-center">
                <img
                  src="/img/announcements.png"
                  alt="About MMPAA"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>


          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
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