
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    th: {
      aboutTitle: 'ABOUT US',
      aboutText: 'Food Pack Asia is a trade show for the food and beverage, packaging, transportation and conveying industries.',
      infoTitle: 'IMPORTANT INFORMATION',
      infoLinks: ['About the show', 'Highlights', 'Exhibitors List'],
      contactTitle: 'CONTACT US',
      address: '3300/111 Elephant Tower (Zone B), Phaholyothin Road, Chomphon, Chatujak, Bangkok 10900 Thailand',
      hours: 'Mon. – Fri. 9AM – 6PM'
    },
    en: {
      aboutTitle: 'ABOUT US',
      aboutText: 'Food Pack Asia is a trade show for the food and beverage, packaging, transportation and conveying industries.',
      infoTitle: 'IMPORTANT INFORMATION',
      infoLinks: ['About the show', 'Highlights', 'Exhibitors List'],
      contactTitle: 'CONTACT US',
      address: '3300/111 Elephant Tower (Zone B), Phaholyothin Road, Chomphon, Chatujak, Bangkok 10900 Thailand',
      hours: 'Mon. – Fri. 9AM – 6PM'
    }
  };

  return (
    <footer className="bg-amber-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">{content[language].aboutTitle}</h3>
            <p className="text-amber-100 leading-relaxed">
              {content[language].aboutText}
            </p>
          </div>

          {/* Important Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">{content[language].infoTitle}</h3>
            <ul className="space-y-2">
              {content[language].infoLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">{content[language].contactTitle}</h3>
            <div className="space-y-3 text-amber-100">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p>{content[language].address}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div>
                  <p>+662 838 9999</p>
                  <p>+662 760 8880</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <p>admin@thailandpages.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <p>{content[language].hours}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-200">
          <p>&copy; 2024 Food Pack Asia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
