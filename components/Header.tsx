import { useState } from "react";

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">
              mesplansdepermis.fr
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#accueil"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Accueil
              </a>
              <a
                href="#comment-ca-marche"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Comment ça marche ?
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
                  Nos offres
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a
                    href="#permis-construire"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Permis de construire
                  </a>
                  <a
                    href="#declaration-prealable"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Déclaration préalable
                  </a>
                  <a
                    href="#service-unite"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Service à l&apos;unité
                  </a>
                </div>
              </div>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              aria-label="Menu mobile"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#accueil"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a
                href="#comment-ca-marche"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Comment ça marche ?
              </a>
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Nos offres</div>
                <a
                  href="#permis-construire"
                  className="text-gray-600 hover:text-blue-600 block pl-4 py-1 rounded-md text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Permis de construire
                </a>
                <a
                  href="#declaration-prealable"
                  className="text-gray-600 hover:text-blue-600 block pl-4 py-1 rounded-md text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Déclaration préalable
                </a>
                <a
                  href="#service-unite"
                  className="text-gray-600 hover:text-blue-600 block pl-4 py-1 rounded-md text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Service à l&apos;unité
                </a>
              </div>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

//export default Header;



import { useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Comment ça marche ?', href: '/processus' },
    {
      label: 'Nos offres',
      href: '/nos-offres',
      submenu: [
        { label: 'Permis de construire', href: '/permisdeconstruire' },
        { label: 'Déclaration préalable', href: '/declaration-prealable-de-travaux' },
        { label: 'Service à l\'unité', href: '/service' },
        { label: 'Dossier E.R.P', href: '/erp' }
      ]
    },
    { label: 'Contact', href: '/devis' }
  ];

  // Gestion du scroll pour afficher/masquer le header
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas - masquer
        setIsVisible(false);
      } else {
        // Scroll vers le haut - afficher
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div 
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                className="h-16 w-auto hidden md:block" 
                src="https://mesplansdepermis.fr/wp-content/uploads/2024/10/logo-mesplansdepermis-15.png" 
                alt="mesplansdepermis.fr"
              />
              <img 
                className="h-14 w-auto md:hidden" 
                src="https://mesplansdepermis.fr/wp-content/uploads/2024/10/logo-mesplansdepermis-20.png" 
                alt="mesplansdepermis.fr"
              />
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <ul className="flex space-x-10">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a 
                    href={item.href}
                    className="text-gray-800 hover:text-[#002147] font-medium text-base transition-colors duration-200 flex items-center"
                    onMouseEnter={() => item.submenu && setOpenSubmenu(index)}
                  >
                    {item.label}
                    {item.submenu && (
                      <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </a>
                  
                  {/* Submenu Desktop */}
                  {item.submenu && (
                    <ul 
                      className={`absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-3 transition-all duration-200 border border-gray-100 ${
                        openSubmenu === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex}>
                          <a 
                            href={subitem.href}
                            className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#002147] transition-colors duration-200"
                          >
                            {subitem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button - Oxford Blue */}
            <a 
              href="/devis"
              className="bg-[#002147] text-white px-7 py-3 rounded-lg font-medium hover:bg-[#003366] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              J'obtiens mon devis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
          }`}
        >
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div className="flex flex-col">
                  <a 
                    href={item.href}
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-md font-medium transition-colors"
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault();
                        toggleSubmenu(index);
                      }
                    }}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      {item.submenu && (
                        <svg 
                          className={`h-5 w-5 transition-transform duration-200 ${openSubmenu === index ? 'rotate-180' : ''}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                  </a>
                  
                  {/* Submenu Mobile */}
                  {item.submenu && (
                    <ul 
                      className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${
                        openSubmenu === index ? 'max-h-96 mt-2' : 'max-h-0'
                      }`}
                    >
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex}>
                          <a 
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#002147] rounded-md transition-colors"
                          >
                            {subitem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
            
            {/* Mobile CTA */}
            <li className="px-4 pt-4">
              <a 
                href="/devis"
                className="block w-full text-center bg-[#002147] text-white px-7 py-3 rounded-lg font-medium hover:bg-[#003366] transition-all duration-200 shadow-sm"
              >
                J'obtiens mon devis
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

