import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#industries", label: "Industries" },
    { href: "#stats", label: "Statistics" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z" fill="#0960ec"></path> <path d="M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z" fill="#0960ec"></path> <path d="M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z" fill="#0960ec"></path> <path opacity="0.37" d="M16 13.25C16.41 13.25 16.75 12.91 16.75 12.5C16.75 12.09 16.41 11.75 16 11.75H13.25V5.75H16C16.41 5.75 16.75 5.41 16.75 5C16.75 4.59 16.41 4.25 16 4.25H9C8.59 4.25 8.25 4.59 8.25 5C8.25 5.41 8.59 5.75 9 5.75H11.75V18C11.75 19.52 12.98 20.75 14.5 20.75H16C16.41 20.75 16.75 20.41 16.75 20C16.75 19.59 16.41 19.25 16 19.25H14.5C13.81 19.25 13.25 18.69 13.25 18V13.25H16Z" fill="#0960ec"></path> <path d="M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z" fill="#0960ec"></path> </g></svg>
           <a className="font-bold text-2xl text-primary">DataFlow</a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full mt-4">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
