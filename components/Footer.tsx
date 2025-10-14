"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navigationItemsGroupOne = [
    {
      label: "Votre permis de construire",
      href: "https://mesplansdepermis.fr/permisdeconstruire/",
    },
    {
      label: "Votre déclaration préalable",
      href: "https://mesplansdepermis.fr/declaration-prealable-de-travaux/",
    },
    {
      label: "Vos services à l'unité",
      href: "https://mesplansdepermis.fr/service/",
    },
    {
      label: "Votre dossier E.R.P",
      href: "https://mesplansdepermis.fr/erp/",
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
      href: "https://mesplansdepermis.fr/notre-entreprise/",
    },
    {
      label: "Nos architectes",
      href: "https://mesplansdepermis.fr/nos-architectes/",
    },
    {
      label: "Nos réalisations",
      href: "https://mesplansdepermis.fr/nos-realisations/",
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
    <footer className="bg-white flex items-center justify-center w-full">
      <div
        className="px-6 py-16 md:px-12 lg:px-0 lg:w-[77%]  min-h-[calc(100vh-76px)] flex flex-col justify-between"
        style={{ fontFamily: "var(--font-figtree)" }}
      >
        <div className="mx-auto max-w-7x h-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                  <Image
                    src="https://mesplansdepermis.fr/wp-content/uploads/2024/10/logo-mesplansdepermis-15-1024x284.png"
                    className=""
                    width={360}
                    height={360}
                    alt={"Logo"}
                  />
                </div>
              </div>
            </div>

            {/* Votre projet */}
            <div>
              <h3 className="mb-6 text-base font-semibold text-[18px] text-oxford_blue text-center md:text-start">
                Votre projet
              </h3>
              <ul className="space-y-4 text-center md:text-start">
                {navigationItemsGroupOne.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[16px] text-dim_gray font-[400] transition-colors duration-100 hover:text-syracuse_red_orange text-center"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* En savoir plus */}
            <div>
              <h3 className="mb-6 text-[18px] font-semibold text-oxford_blue text-center md:text-start">
                En savoir plus
              </h3>
              <ul className="space-y-4 text-center md:text-start">
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
              <h3 className="mb-6 text-base font-semibold text-gray-900 text-center md:text-start">
                Contact
              </h3>
              <ul className="space-y-4 text-center md:text-start">
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
        </div>
        <div>
          {/* Divider */}
          <div className="my-12 h-px bg-gray-300" />

          {/* Bottom section */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-gray-600">
              © 2025 Mesplansdepermis – WordPress.
            </p>
            <Link href="https://mesplansdepermis.fr/mentions-legales/">
              <button className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900">
                Mentions légales
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
