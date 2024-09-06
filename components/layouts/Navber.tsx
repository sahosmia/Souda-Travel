"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { motion } from "framer-motion";

const menus = [
  { title: "Home", url: "/" },
  { title: "Country", url: "/country" },
  { title: "Destinations", url: "/destinations" },
  { title: "Hotels", url: "/hotels" },
  { title: "Restaurants", url: "/restaurants" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menus.map(({ title, url }) => (
              <Link
                key={title}
                href={url}
                className={`text-lg font-medium ${
                  pathname === url
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
                }`}
              >
                {title}
              </Link>
            ))}
            <Link href="/get-started">
              <button className="ml-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-4 pt-2 pb-4 space-y-2 sm:px-3">
            {menus.map(({ title, url }, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <Link
                  href={url}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${
                    pathname === url
                      ? "text-blue-700 dark:text-blue-500"
                      : "text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500"
                  }`}
                >
                  {title}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: menus.length * 0.2,
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <Link href="/get-started">
                <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Get Started
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
