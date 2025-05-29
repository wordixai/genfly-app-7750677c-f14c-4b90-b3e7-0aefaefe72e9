import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-amber-800">Café Aroma</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-700 font-medium">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-amber-700 font-medium">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-amber-700 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-700 font-medium">Contact</a>
            <Button className="bg-amber-700 hover:bg-amber-800">Order Online</Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-700 font-medium">Home</a>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-amber-700 font-medium">Menu</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-700 font-medium">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-700 font-medium">Contact</a>
            <div className="px-3 py-2">
              <Button className="w-full bg-amber-700 hover:bg-amber-800">Order Online</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}