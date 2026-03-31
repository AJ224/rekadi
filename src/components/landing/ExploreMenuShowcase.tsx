import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { FullBleedBackgroundSection } from "@/components/ui/FullBleedBackgroundSection";
import { PrimaryButtonLink } from "@/components/ui/ButtonLink";
import urls from "@/config/urls.json";

type MenuCard = {
  title: string;
  imageSrc: string;
};

export function ExploreMenuShowcase() {
  const cards: MenuCard[] = [
    { title: "VEG\nSANDWICHES", imageSrc: "/menu_1.png" },
    { title: "PIZZA", imageSrc: "/menu_2.png" },
    { title: "PASTA", imageSrc: "/menu_3.png" },
    { title: "VADA JUNCTION", imageSrc: "/menu_4.png" },
  ];

  return (
    <FullBleedBackgroundSection
      className="bg-[var(--rk-surface)]"
      backgroundSrc="/exploremenubg.png"
      backgroundWrapperClassName="z-0 -top-14"  // adjust -top-10 to taste
      backgroundImageClassName="object-cover object-[20%_40%]"
      contentClassName="relative z-10 py-14 md:py-16"
    >
      <Container className="max-w-none">
        <h2 className="text-center text-zinc-900 ds-h2 ds-anim-fade-up">
          Rekadi Signature Bites
        </h2>

        <div className="relative mt-14 pt-10 md:mt-16 md:pt-12">
          {/* arrows */}
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-10 hidden size-11 -translate-x-3 -translate-y-1/2 place-items-center rounded-full bg-[var(--rk-sun)] text-[var(--rk-deep)] shadow-[0_10px_20px_rgba(0,0,0,0.14)] md:grid"
          >
            <span className="text-2xl leading-none">‹</span>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-0 top-1/2 z-10 hidden size-11 translate-x-3 -translate-y-1/2 place-items-center rounded-full bg-[var(--rk-sun)] text-[var(--rk-deep)] shadow-[0_10px_20px_rgba(0,0,0,0.14)] md:grid"
          >
            <span className="text-2xl leading-none">›</span>
          </button>

          <div className="grid gap-x-4 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-14">
            {cards.map((c, idx) => (
              <div
                key={c.title}
                className="relative mx-auto flex h-[383px] w-[295px] flex-col items-center bg-[#F5D34A] shadow-[0_12px_0_rgba(0,0,0,0.08)] ds-anim-fade-up"
                style={{
                  animationDelay: `${80 + idx * 70}ms`,
                  borderTopLeftRadius: "130.5px",
                  borderTopRightRadius: "130.5px",
                  borderBottomLeftRadius: "18px",
                  borderBottomRightRadius: "18px",
                  paddingTop: "201px",
                  paddingRight: "14px",
                  paddingBottom: "32px",
                  paddingLeft: "19px",
                  rowGap: "10px",
                }}
              >
                {/* dish floats above the rounded arch like the mock
                    Use left/right + justify-center so every image centers consistently. */}
                <div className="absolute -top-14 left-0 right-0 flex justify-center">
                  <Image
                    src={c.imageSrc}
                    alt={c.title.replaceAll("\n", " ")}
                    width={520}
                    height={320}
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 40vw, 80vw"
                    className="block h-auto w-[92%] object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.20)]"
                    priority={false}
                  />
                </div>

                <div
                  className="whitespace-pre-line text-center ds-grift-32 text-black"
                >
                  {c.title}
                </div>

                <a
                  href={urls.orderNowUrl}
                  className="inline-flex h-11 w-[80%] items-center justify-center whitespace-nowrap rounded-md bg-[var(--rk-orange)] px-5 text-sm font-extrabold text-white shadow-[0_6px_0_rgba(0,0,0,0.14)] transition hover:brightness-95 active:translate-y-[1px]"
                >
                  ORDER NOW
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <PrimaryButtonLink
            href="#menu"
            className="min-w-[200px] px-10 py-3.5 text-sm shadow-[0_6px_0_rgba(0,0,0,0.14)]"
          >
            VIEW MORE
          </PrimaryButtonLink>
        </div>
      </Container>
    </FullBleedBackgroundSection>
  );
}

