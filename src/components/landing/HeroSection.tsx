import { CtaButtonLink } from "@/components/ui/CtaButtonLink";
import urls from "@/config/urls.json";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden scroll-mt-16">
      <div className="relative h-[calc(100vh-5rem)] w-full bg-[url('/hero_section.png')] bg-cover bg-center">
        <div className="absolute inset-0 ds-anim-fade-in bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-6 px-5 md:bottom-10">
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 gap-3 sm:flex sm:max-w-none sm:items-center sm:justify-center sm:gap-9">
            <CtaButtonLink
              href={urls.orderNowUrl}
              variant="hero"
              className="ds-anim-fade-up w-full sm:w-auto"
            >
            Order Now
            </CtaButtonLink>
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

