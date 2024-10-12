import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
        {/* Columna MMPPAA (2/4) */}
        <div className="md:col-span-2">
          <h3 className="font-bold mb-2">MMPPAA</h3>
          <p>
            In our association, we are dedicated to bringing together alumni of the Master’s in Medical Physics with the
            aim of fostering camaraderie, knowledge exchange, and professional growth in the field of medical physics.
          </p>
        </div>

        {/* Columna Contact (1/4) */}
        <div className="md:col-span-1">
          <h3 className="font-bold mb-2">Contact</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">Linkedin</a>
            </li>
            <li>
              <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">Facebook</a>
            </li>
            <li>
              <a href="mailto:contact@mmpaa.org">Email</a>
            </li>
          </ul>
        </div>

        {/* Columna Useful Links (1/4) */}
        <div className="md:col-span-1">
          <h3 className="font-bold mb-2">Useful links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/members">Members</a>
            </li>
            <li>
              <a href="/be-a-member">Records</a>
            </li>
            <li>
              <a href="/active-members">Announcements</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8  opacity-50" />

      <div className="flex flex-col md:flex-row justify-between items-start mt-4 text-sm">
        <div className="text-left">
          Copyright © {new Date().getFullYear()} {props?.copyright} Master in Medical Physics Alumni Association.
        </div>

        <div className="mt-8 md:mt-0">
          <ThemeSwitch />
        </div>
      </div>
    </Container>
  );
}