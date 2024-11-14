import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../index.css"; // Retain your existing global styles
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="font-black text-xl sm:text-2xl md:text-3xl">
            <Link to="/">
              Share<span className="text-light">Ease</span>
            </Link>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 sm:gap-12 justify-around text-sm sm:text-base">
            <li className="cursor-pointer">
              <NavLink to="/share" className="hover:text-indigo-600 transition-colors">Share Files</NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="/shorten" className="hover:text-indigo-600 transition-colors">Shorten Link</NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Drawer open={isOpen} onOpenChange={toggleMenu}>
              <DrawerTrigger asChild>
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </DrawerTrigger>
              
              {/* Drawer content */}
              <DrawerContent className="w-[75vw] sm:w-[50vw] max-w-md">
                <DrawerHeader>
                  <DrawerTitle className="text-lg font-semibold text-indigo-600">
                    Menu
                  </DrawerTitle>
                </DrawerHeader>
                <div className="mt-6 px-4">
                  <ul className="flex flex-col gap-4">
                    <li className="cursor-pointer">
                      <NavLink 
                        to="/share" 
                        className="block py-2 text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        Share Files
                      </NavLink>
                    </li>
                    <li className="cursor-pointer">
                      <NavLink 
                        to="/shorten" 
                        className="block py-2 text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        Shorten Link
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 px-4 py-4 border-t border-gray-200">
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-full" onClick={toggleMenu}>
                      Close
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;