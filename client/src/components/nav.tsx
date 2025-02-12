import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <Link href="/">
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
