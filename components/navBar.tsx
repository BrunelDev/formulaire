import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { default as Link } from "next/link";
import { useState } from "react";
import { NavButton } from "./PrimaryButton/NavButton";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      titre: "Accueil",
      href: "https://mesplansdepermis.fr/",
      description: "L'accueil est la page d'accueil de votre site web.",
    },
    {
      titre: "Comment ça marche",
      href: "https://mesplansdepermis.fr/processus/",
      description:
        "Comment ça marche est la page de comment ça marche de votre site web.",
    },
    {
      titre: "Nos offres",
      href: "https://mesplansdepermis.fr/nos-offres/",
      description: "Nos offres est la page de nos offres de votre site web.",
    },
    {
      titre: "Contact",
      href: "https://mesplansdepermis.fr/devis/",
      description: "Contact est la page de contact de votre site web.",
    },
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
    <div className="w-full flex items-center justify-center bg-white border-b [border-bottom-style:solid] border-[#f7f7f8] h-[76px]">
      <div className="flex flex-col w-full lg:w-[80%] items-center justify-center absolute top-1/2 -translate-1/2 left-1/2 -translate-x-1/2">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <Image
            className="relative w-[100px] sm:w-[120px] lg:w-[129.73px] h-7 sm:h-8 lg:h-9 object-cover"
            width={129.73}
            height={36}
            alt="Logo image"
            src={"/images/logo.png"}
          />

          <div className=" items-center gap-4 lg:gap-10 relative flex-[0_0_auto] hidden lg:inline-flex">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row gap-10">
                {navigationItems.map((component) =>
                  component.titre !== "Nos offres" ? (
                    <NavigationMenuItem key={component.titre}>
                      <Link
                        href={component.href}
                        className="transition-colors duration-100 hover:text-syracuse_red_orange"
                      >
                        {component.titre}
                      </Link>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem
                      key={component.titre}
                      className="relative"
                    >
                      <NavigationMenuTrigger>
                        <h6 className="transition-colors duration-100 hover:text-syracuse_red_orange">
                          Nos offres
                        </h6>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-4 p-4">
                          {nosOffres.map((offre) => (
                            <li key={offre.label}>
                              <NavigationMenuLink href={offre.href}>
                                <h6 className="text-sm transition-colors duration-100 hover:text-syracuse_red_orange">
                                  {offre.label}
                                </h6>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
            <NavButton />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden w-full">
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
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-[#f7f7f8] animate-in slide-in-from-bottom-4 duration-200 w-full">
          <div className="px-4 py-3 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.titre}
                href={item.href}
                className="block px-3 py-2 text-text-color font-text-medium font-[number:var(--text-medium-font-weight)] text-sm tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)] hover:text-button-color hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.titre}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
