import { MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const contactInfo = [
  {
    icon: PhoneIcon,
    label: "Nous appeler",
    value: "(+33) 6 56 74 54 70",
    href: "tel:+33656745470",
  },
  {
    icon: MailIcon,
    label: "Nous écrire",
    value: "contact@mesplansdepermis.fr",
    href: "mailto:contact@mesplansdepermis.fr",
  },
];

const statistics = [
  {
    number: "6800+",
    label: "Plans réalisés",
  },
  {
    number: "900+",
    label: "Cerfas remplis",
  },
  {
    number: "96%",
    label: "Permis accepté",
  },
  {
    number: "70%",
    label: "D'économie",
  },
];

export const ContentWrapperSection = ()=> {
  return (
    <section className="flex flex-col w-full max-w-[719px] items-start gap-5 pt-0 pb-8 px-0 relative">
      {/* Header Section */}
      <header className="flex flex-col items-start gap-2 w-full translate-y-[-1rem] animate-fade-in opacity-0">
        <h1 className="w-full mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#094d9a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
          Félicitations !
        </h1>

        <p className="w-full font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
          Votre devis vient tout juste d&#39;être envoyé dans votre boîte mail,
          consultez-le dès maintenant !
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-start gap-8 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex flex-col items-start gap-2 w-full">
          {/* Contact Card */}
          <Card className="w-full bg-white border-0 shadow-none">
            <CardContent className="flex flex-col items-start gap-4 p-5">
              <div className="flex flex-col items-start gap-1 w-full">
                <h2 className="w-full mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[#021327] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
                  Des questions ? Envie de valider votre devis ?
                </h2>

                <p className="w-full font-text-medium font-[number:var(--text-medium-font-weight)] text-secondary-color text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                  Contactez l&apos;équipe dès maintenant par téléphone ou par
                  mail.
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 w-full">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="inline-flex items-center gap-3">
                    <div className="relative w-11 h-11 flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-[#094d9a]" />
                    </div>

                    <div className="inline-flex flex-col items-start">
                      <div className="font-[number:var(--label-small-font-weight)] mt-[-1.00px] font-label-small text-text-color text-[length:var(--label-small-font-size)] tracking-[var(--label-small-letter-spacing)] leading-[var(--label-small-line-height)] [font-style:var(--label-small-font-style)]">
                        {contact.label}
                      </div>

                      <a
                        href={contact.href}
                        className="w-fit [font-family:'Figtree',Helvetica] font-normal text-base tracking-[0] leading-4 transition-colors hover:opacity-80"
                      >
                        <span className="leading-[var(--text-medium-line-height)] underline font-text-medium [font-style:var(--text-medium-font-style)] font-[number:var(--text-medium-font-weight)] tracking-[var(--text-medium-letter-spacing)] text-[length:var(--text-medium-font-size)] text-[#db4200]">
                          {contact.value}
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer Text */}
          <p className="w-full font-text-smallest font-[number:var(--text-smallest-font-weight)] text-[#6d7074] text-[length:var(--text-smallest-font-size)] tracking-[var(--text-smallest-letter-spacing)] leading-[var(--text-smallest-line-height)] [font-style:var(--text-smallest-font-style)]">
            Les résultats des simulations sont indicatifs et ne constituent pas
            une offre définitive. Le devis final sera validé après examen
            attentif de votre dossier (et promis, on ne fait pas de lancer de
            fléchettes pour décider du prix).
            <br />
            <br />
            Si notre proposition vous plaît, envoyez-nous simplement un e-mail.
            Nous l&#39;étudierons sérieusement et vous confirmerons rapidement
            votre devis, pour avancer sereinement dans votre projet.
          </p>
        </div>

        {/* Statistics Section */}
        <Card className="w-full bg-[#042347] border-0 shadow-none translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <CardContent className="flex flex-col items-center justify-center gap-2.5 p-5">
            <div className="flex h-16 items-center justify-center gap-8 w-full">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[98px] items-start gap-1"
                >
                  <div className="w-full mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                    {stat.number}
                  </div>

                  <div className="w-full font-text-medium font-[number:var(--text-medium-font-weight)] text-white text-[length:var(--text-medium-font-size)] text-center tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
