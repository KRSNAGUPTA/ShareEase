import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Menu } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const NavLink = ({ to, children }) => {
    const isActive = window.location.pathname === to;
    return (
      <Link
        to={to}
        className={`hover:text-primary transition-colors ${
          isActive ? "text-primary font-semibold" : "text-foreground"
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="w-full bg-background/80 backdrop-blur-md rounded-xl px-4 sm:px-8 py-2 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <h1 className="font-black text-xl sm:text-2xl md:text-3xl">
          <Link to="/">
            Share<span className="text-primary">Ease</span>
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <NavLink to="/share">Share Files</NavLink>
          </li>
          <li>
            <NavLink to="/shorten">Shorten Link</NavLink>
          </li>
          <li>
            <a
              href="https://github.com/KRSNAGUPTA/ShareEase"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Github className="h-6 w-6 text-foreground transition-transform hover:scale-110 hover:text-primary" />
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[75vw] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle className="text-left text-lg font-semibold text-primary">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4">
              <NavLink to="/share">Share Files</NavLink>
              <NavLink to="/shorten">Shorten Link</NavLink>
              <a
                href="https://github.com/KRSNAGUPTA/ShareEase"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default NavBar;
