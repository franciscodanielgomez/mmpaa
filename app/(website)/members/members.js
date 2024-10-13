import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";


export default function Members({ authors, settings }) {
  return (
    <Container>
      <h1
        className="text-brand-primary mb-12 mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Members
      </h1>

      <div className="my-10">
        <div className="p-4 bg-gray-100 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-8">Do you want to be a member?</h3>
            <p className="text-gray-700 mb-8">
              Being an active member of an MMPAA involves more than mere affiliation; it entails proactive engagement
              and contribution to the collective pursuit of knowledge. Actively participating in conferences, seminars,
              and collaborative projects fosters intellectual exchange, broadens perspectives, and enhances one’s
              expertise. Networking with fellow members, sharing insights, and staying abreast of the latest
              developments enrich the communal fabric. Ultimately, an active member catalyzes the association’s mission,
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
      </div>

      <h3
        className="mb-12 mt-2 text-2xl font-semibold tracking-tight dark:text-white lg:leading-snug">
        Active Members
      </h3>

      <div className="mx-auto mt-14 mb-14 dark:prose-invert">
        <p className="my-4">
          Here is the list of our active members. Being an active member of the MMPAA goes beyond mere affiliation; it
          involves proactive engagement and a commitment to advancing collective knowledge. Participation in
          conferences, seminars, and collaborative projects fosters intellectual exchange and broadens perspectives
          while enhancing expertise. Networking with fellow members and sharing insights keep everyone informed of the
          latest developments, strengthening our community. Ultimately, each active member plays a vital role in driving
          the association’s mission, fostering innovation, and advancing scientific inquiry through sustained dedication
          and involvement.
        </p>
      </div>


      <hr className="my-8" />


      <div style={{ height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR2TMWwofsh-xoNkwcgKMrUVyGR1oSLo4MJ7Skqqd39v_UPGKdA3ZsMkBUtr8R3Og8KKehwlu1uEu24/pubhtml?gid=1907906795&single=true&widget=true&headers=false"
          style={{ height: "100%", width: "500px" }}  // Puedes ajustar el ancho aquí
          frameBorder="0"
        ></iframe>
      </div>


    </Container>
  );
}
