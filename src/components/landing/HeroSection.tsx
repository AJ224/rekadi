import Image from "next/image";

import { CtaButtonLink } from "@/components/ui/CtaButtonLink";
import { OrderNowButtonLink } from "@/components/ui/OrderNowButtonLink";
import urls from "@/config/urls.json";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden scroll-mt-16">
      <div className="relative h-[72vh] min-h-[520px] w-full bg-[url('/hero_section.png')] bg-cover bg-center md:h-[calc(100vh-5rem)] md:min-h-0">
        <div className="absolute inset-0 ds-anim-fade-in bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {/* Center logo (helps mobile composition) */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <Image
            src="/LOGO_1 1.png"
            alt="Rekadi"
            width={220}
            height={220}
            priority
            className="h-auto w-[clamp(140px,34vw,220px)] drop-shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
          />
        </div>

        <div className="absolute inset-x-0 bottom-6 px-5 md:bottom-10">
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 gap-3 sm:flex sm:max-w-none sm:items-center sm:justify-center sm:gap-9">
            <OrderNowButtonLink
              variant="hero"
              className="ds-anim-fade-up w-full sm:w-auto"
            >
              Order Now
            </OrderNowButtonLink>
            <CtaButtonLink
              href={urls.exploreMenuUrl}
              variant="hero"
              className="ds-anim-fade-up [animation-delay:90ms] w-full sm:w-auto"
            >
              Explore Menu
            </CtaButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

