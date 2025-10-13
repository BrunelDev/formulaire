"use client";

import Link from "next/link";

export default function Footer() {
  const navigationItemsGroupOne = [
    {
      label: "Votre permis de construire",
      href: "https://mesplansdepermis.fr/permis-construire/",
    },
    {
      label: "Votre déclaration préalable",
      href: "https://mesplansdepermis.fr/declaration-prealable/",
    },
    {
      label: "Vos services à l'unité",
      href: "https://mesplansdepermis.fr/services-unite/",
    },
    {
      label: "Votre dossier E.R.P",
      href: "https://mesplansdepermis.fr/dossier-erp/",
    },
  ];
  const navigationItemsGroupTwo = [
    {
      label: "Comment ça marche ?",
      href: "https://mesplansdepermis.fr/processus/",
    },
    {
      label: "Nos offres & tarifs",
      href: "https://mesplansdepermis.fr/nos-offres/",
    },
    {
      label: "Notre entreprise",
      href: "https://mesplansdepermis.fr/entreprise/",
    },
    {
      label: "Nos architectes",
      href: "https://mesplansdepermis.fr/architectes/",
    },
    {
      label: "Nos réalisations",
      href: "https://mesplansdepermis.fr/realisations/",
    },
    {
      label: "Nos guides et astuces",
      href: "https://mesplansdepermis.fr/guides-astuces/",
    },
    { label: "F.A.Q", href: "https://mesplansdepermis.fr/faq/" },
  ];
  const navigationItemsGroupThree = [
    {
      label: "Notre formulaire de contact",
      href: "https://mesplansdepermis.fr/devis/",
    },
    {
      label: "contact@mesplansdepermis.fr",
      href: "mailto:contact@mesplansdepermis.fr",
    },
    { label: "(+33) 6 56 74 54 70", href: "tel:+33656745470" },
  ];
  return (
    <footer
      className="bg-white px-6 py-16 md:px-12 lg:px-24`h-[calc(100vh-172px)] font-figtree"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                >
                  <rect
                    x="8"
                    y="8"
                    width="24"
                    height="24"
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect
                    x="14"
                    y="14"
                    width="12"
                    height="12"
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold uppercase leading-tight tracking-tight">
                  MES PLANS
                </span>
                <span className="text-lg font-bold uppercase leading-tight tracking-tight">
                  DE PERMIS
                </span>
              </div>
            </div>
          </div>

          {/* Votre projet */}
          <div>
            <h3 className="mb-6 text-base font-semibold text-[18px] text-oxford_blue">
              Votre projet
            </h3>
            <ul className="space-y-4">
              {navigationItemsGroupOne.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[16px] text-dim_gray font-[400] transition-colors duration-100 hover:text-syracuse_red_orange"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* En savoir plus */}
          <div>
            <h3 className="mb-6 text-[18px] font-semibold text-oxford_blue">
              En savoir plus
            </h3>
            <ul className="space-y-4">
              {navigationItemsGroupTwo.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[16px] text-dim_gray font-[400] transition-colors duration-100 hover:text-syracuse_red_orange"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-base font-semibold text-gray-900">
              Contact
            </h3>
            <ul className="space-y-4">
              {navigationItemsGroupThree.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("mailto:") ||
                  item.href.startsWith("tel:") ? (
                    <a
                      href={item.href}
                      className="text-[16px] text-dim_gray font-[400] transition-colors duration-100 hover:text-syracuse_red_orange"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[16px] text-dim_gray font-[400] transition-colors duration-100 hover:text-syracuse_red_orange"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-300" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">
            © 2025 Mesplansdepermis – WordPress.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            Mentions légales
          </button>
        </div>
      </div>
    </footer>
  );
}
