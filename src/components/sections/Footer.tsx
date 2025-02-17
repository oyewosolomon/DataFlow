
import { Link } from "wouter";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <span className="font-bold text-xl text-primary">DataFlow</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Transforming data into actionable insights for businesses worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-gray-600 hover:text-primary">Features</a></li>
              <li><a href="#industries" className="text-sm text-gray-600 hover:text-primary">Industries</a></li>
              <li><a href="#stats" className="text-sm text-gray-600 hover:text-primary">Statistics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-gray-600 hover:text-primary">About</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</a></li>
              <li><a href="#terms" className="text-sm text-gray-600 hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} DataFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
