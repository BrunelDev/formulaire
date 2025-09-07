import Image from "next/image";

export default function NavBar() {
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
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm lg:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
              Accueil
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm lg:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
              Comment ça marche
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm lg:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
              Nos offres
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm lg:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] whitespace-nowrap [font-style:var(--text-medium-font-style)]">
              Contact
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="p-2 text-text-color">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
