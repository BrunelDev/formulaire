import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Accueil", href: "https://mesplansdepermis.fr/" },
    {
      label: "Comment ça marche",
      href: "https://mesplansdepermis.fr/processus/",
    },
    { label: "Nos offres", href: "https://mesplansdepermis.fr/nos-offres/" },
    { label: "Contact", href: "https://mesplansdepermis.fr/devis/" },
  ];
  const nosOffres = [
    {
      label: "Permis de construire",
      href: "https://mesplansdepermis.fr/nos-offres/permis-construire/",
    },
    {
      label: "Déclaration préalable",
      href: "https://mesplansdepermis.fr/nos-offres/declaration-prealable/",
    },
    {
      label: "Service à l'unité",
      href: "https://mesplansdepermis.fr/nos-offres/service-unite/",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start px-4 sm:px-8 lg:px-24 py-3 sm:py-4 absolute top-0 left-0 bg-background border-b [border-bottom-style:solid] border-[#f7f7f8]">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <Image
          className="relative w-[100px] sm:w-[120px] lg:w-[129.73px] h-7 sm:h-8 lg:h-9 object-cover"
          width={129.73}
          height={36}
          alt="Logo image"
          src={"/images/logo.png"}
        />

        <div className="hidden md:inline-flex items-center gap-4 lg:gap-10 relative flex-[0_0_auto]">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4 lg:gap-10">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.label === "Nos offres" ? (
                    <>
                      <NavigationMenuTrigger className="relative w-fit mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm lg:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)] hover:text-button-color transition-colors duration-200">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="p-4">
                        <div className="grid grid-cols-1 gap-2 w-[260px]">
                          {nosOffres.map((service) => (
                            <a
                              key={service.label}
                              href={service.href}
                              className="block px-3 py-2 rounded-md text-sm text-text-color hover:bg-gray-50 hover:text-button-color transition-colors duration-200"
                            >
                              {service.label}
                            </a>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      className="relative w-fit mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm lg:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)] hover:text-button-color transition-colors duration-200"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}

              <NavigationMenuIndicator />
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="p-2 text-text-color hover:text-button-color transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-[#f7f7f8] animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-3 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-text-color font-text-medium font-[number:var(--text-medium-font-weight)] text-sm tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)] hover:text-button-color hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
