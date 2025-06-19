
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    th: ['Home', 'About Us', 'Exhibitor', 'Visitor', 'New Knowledge', 'Packaging For More Solutions', 'Venue', 'Contact Us'],
    en: ['Home', 'About Us', 'Exhibitor', 'Visitor', 'New Knowledge', 'Packaging For More Solutions', 'Venue', 'Contact Us']
  };

  const languageOptions = {
    th: 'ไทย',
    en: 'English'
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://foodpackasia.com/wp-content/uploads/2023/12/FoodPack_2024_LOGO.png" 
              alt="FoodPack Asia Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems[language].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  {languageOptions[language]}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border shadow-lg">
                <DropdownMenuItem 
                  onClick={() => setLanguage('th')}
                  className="cursor-pointer hover:bg-gray-50"
                >
                  ไทย
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className="cursor-pointer hover:bg-gray-50"
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {menuItems[language].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-2 border-t border-gray-100">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center justify-between">
                      {languageOptions[language]}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-full bg-white border shadow-lg">
                    <DropdownMenuItem 
                      onClick={() => {
                        setLanguage('th');
                        setIsMenuOpen(false);
                      }}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      ไทย
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => {
                        setLanguage('en');
                        setIsMenuOpen(false);
                      }}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
