import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import NextLink from "next/link";
import { useState } from "react";

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
            <NavigationMenuList>
              {navigationItems.map((component) => (
                <NavigationMenuItem key={component.titre}>
                  <Link href={component.href}>{component.titre}</Link>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <NextLink
                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              Beautifully designed components built with
                              Tailwind CSS.
                            </p>
                          </NextLink>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NextLink
                          href="/docs"
                          className="block rounded-md px-3 py-2 hover:bg-gray-50"
                        >
                          Introduction
                        </NextLink>
                      </li>
                      <li>
                        <NextLink
                          href="/docs/installation"
                          className="block rounded-md px-3 py-2 hover:bg-gray-50"
                        >
                          Installation
                        </NextLink>
                      </li>
                      <li>
                        <NextLink
                          href="/docs/primitives/typography"
                          className="block rounded-md px-3 py-2 hover:bg-gray-50"
                        >
                          Typography
                        </NextLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger>List</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <NextLink href="#">
                          <div className="font-medium">Components</div>
                          <div className="text-muted-foreground">
                            Browse all components in the library.
                          </div>
                        </NextLink>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <NextLink href="#">
                          <div className="font-medium">Documentation</div>
                          <div className="text-muted-foreground">
                            Learn how to use the library.
                          </div>
                        </NextLink>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <NextLink href="#">
                          <div className="font-medium">Blog</div>
                          <div className="text-muted-foreground">
                            Read our latest blog posts.
                          </div>
                        </NextLink>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
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
