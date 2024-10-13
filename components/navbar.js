"use client";

import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Members", href: "/members" },
    { label: "Records", href: "/records" },
    { label: "Announcements", href: "/archive", badge: "New" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <Container>
      <Disclosure as="nav" >
        {({ open }) => (
          <>
            <div className="flex items-center justify-between">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/img/logo.svg"
                  alt="Logo"
                  width={112}
                  height={56}
                  priority
                />
              </Link>
              <div className="hidden md:flex md:items-center md:space-x-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
              <Disclosure.Button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-50 ">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <Disclosure.Button
                    key={item.label}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.badge}
                      </span>
                    )}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Container>
  );
}