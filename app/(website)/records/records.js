import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";


export default function Records({ authors, settings }) {
  return (
    <Container>
      <h1
        className="text-brand-primary mb-12 mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Records
      </h1>
      <h3
        className="mb-12 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:leading-snug">
        Library and Registers: Our Curriculum Overview
      </h3>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
        <p className="my-4">
          The purpose of this space is to provide access to freely available documents, presentations, records, and
          videos pertaining to the association, medical physics, and other related topics. If you have any questions,
          please do not hesitate to contact us.
        </p>
      </div>

      <hr className="my-8" />


      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Cambié a 3 columnas */}

          {/* Tarjeta de Newsletter */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md  flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-8">Newsletter</h3>
              <p className="text-gray-700 mb-8">
                Click on the following link to find the information you are looking for.
              </p>
            </div>
            <a
              href="https://zenodo.org/record/8072380"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button
                type="button"
                className="py-2 px-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 dark:bg-white dark:text-black"
              >
                See more
              </button>
            </a>
          </div>

          {/* Tarjeta de Documents */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-8">Documents</h3>
              <p className="text-gray-700 mb-8">
                Click on the following link to find the information you are looking for.
              </p>
            </div>
            <a
              href="https://mega.nz/folder/dBpA2SJJ#WgUyepJY9EgdJW13dnLksw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button
                type="button"
                className="py-2 px-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 dark:bg-white dark:text-black"
              >
                See more
              </button>
            </a>
          </div>

          {/* Tarjeta de Webinar videos */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-8">Webinar videos</h3>
              <p className="text-gray-700 mb-8">
                Click on the following link to find the information you are looking for.
              </p>
            </div>
            <a
              href="https://mega.nz/folder/tNIHjKRA#tE2UbfVwwtqxkOVTJo7G5g"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button
                type="button"
                className="py-2 px-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 dark:bg-white dark:text-black"
              >
                See more
              </button>
            </a>
          </div>

        </div>
      </div>
    </Container>
  );
}
