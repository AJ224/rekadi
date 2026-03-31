import Image from "next/image";

import { Container } from "@/components/ui/Container";
import urls from "@/config/urls.json";

/** Encoded path for public assets with spaces */
const GROUP_23 = "/Group%2023.png";

function OrderNowCta({ className }: Readonly<{ className?: string }>) {
  return (
    <a
      href={urls.orderNowUrl}
      className={`group ds-cta inline-flex items-center gap-3 rounded-xl bg-[var(--rk-orange)] px-6 py-3.5 text-white uppercase tracking-wide shadow-[0_6px_0_rgba(0,0,0,0.12)] transition hover:brightness-[0.98] active:translate-y-[1px] active:shadow-[0_4px_0_rgba(0,0,0,0.12)] ${className ?? ""}`}
    >
      <span>ORDERNOW</span>
      <span
        className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--rk-sun)] transition group-hover:brightness-105"
        aria-hidden
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[var(--rk-orange)]"
        >
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

function IconStreetCart({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M14 46h4m28 0h4M18 22h36l-4 20H22L18 22Zm8-8v8M38 14v8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="46" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="42" cy="46" r="4" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M10 22h6l4 4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGourmetCloche({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M32 14c-10 0-18 7-18 16h36c0-9-8-16-18-16Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 30h24M32 14v-4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M26 48h12v4H26v-4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M18 48h28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M38 20l6-6M34 23l8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

function IconHealthyHeart({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M51.2 28.5c0-6.8-5.5-12.4-12.2-12.4-3.8 0-7.2 1.7-9.5 4.4a12.3 12.3 0 0 0-9.5-4.4c-6.7 0-12.2 5.6-12.2 12.4 0 11.2 15.5 21.7 21.7 26.7l.2.2.2-.2c6.2-5 21.3-15.5 21.3-26.7Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M38 22c2 2 4 6 2 10M28 26c-2 4-1 7 2 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

type BlobFoodImageProps = Readonly<{
  src: string;
  alt: string;
  priority?: boolean;
  objectPosition?: string;
  variant?: "default" | "alt";
}>;

function BlobFoodImage({
  src,
  alt,
  priority,
  objectPosition,
  variant = "default",
}: BlobFoodImageProps) {
  return (
    <div
      className={`rk-blob w-full max-w-[min(100%,440px)] ${variant === "alt" ? "rk-blob--alt" : ""}`}
    >
      <div className="rk-blob__ring" aria-hidden />
      <div className="rk-blob__inner">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 440px, (min-width: 768px) 360px, 90vw"
          className={`object-cover ${objectPosition ?? "object-center"}`}
          priority={priority}
        />
      </div>
    </div>
  );
}

const STORY_POINTS = [
  "Authentic Indian Street Flavors",
  "Modern & Hygienic Preparation",
  "Premium Quality Ingredients",
  "Wide Variety of Menu Options",
  "Quick Takeaway & Fast Delivery",
  "Perfect Balance of Taste & Innovation",
];

export function RekadiStreetFoodReimagined() {
  const marqueeItems = Array.from({ length: 10 }, (_, i) => `marquee-${i}`);
  return (
    <section className="scroll-mt-16" aria-label="Rekadi street food">
      {/* —— Part 1: Street Food, Reimagined — bg_mascout.png —— */}
      <div id="about" className="relative bg-[var(--rk-surface)]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/bg_mascout.png"
            alt=""
            fill
            className="object-contain object-bottom-right"
            sizes="100vw"
            priority
          />
        </div>

        <Container className="relative z-10 px-5 pb-14 pt-14 md:px-6 md:pb-16 md:pt-16 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
            <div className="ds-anim-fade-up max-w-xl lg:max-w-[560px]">
              <h1
                className="font-[family-name:var(--font-display)] font-bold leading-[100%] tracking-[0] text-[var(--rk-orange)]"
                style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
              >
                Street Food, Reimagined
              </h1>
              <p className="mt-5 font-semibold italic leading-snug text-[var(--rk-deep)] ds-body-sm">
                Serving bold Indian street flavours with a modern twist.
              </p>
              <p className="mt-5 text-[var(--rk-deep)] ds-body-sm">
                From iconic Vada pav and missal pav to gourmet sandwiches, pizzas,
                and pasta — Rekadi brings you the best of Indian street food with
                quality ingredients, hygienic preparation, and unforgettable
                taste.
              </p>
              <div className="mt-9">
                <OrderNowCta />
              </div>
            </div>

            <div className="ds-anim-fade-up flex justify-center lg:justify-end [animation-delay:90ms]">
              <div className="relative w-full max-w-[min(100%,520px)]">
                <Image
                  src="/bowlie_masscout.png"
                  alt="Vada Pav"
                  width={619}
                  height={612}
                  priority
                  sizes="(min-width: 1024px) 520px, (min-width: 768px) 45vw, 90vw"
                  className="h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(0,43,43,0.14)]"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* —— Part 2: Yellow card — Group 23.png —— */}
      <div className="bg-[var(--rk-surface)] px-5 py-10 md:px-6 md:py-12">
        <Container className="max-w-6xl">
          <div
            className="relative rounded-[28px] px-6 py-10 md:rounded-[36px] md:px-10 md:py-12 lg:px-14"
            style={{
              backgroundColor: "var(--rk-sun)",
              backgroundImage: `url("${GROUP_23}")`,
              /* Full width, natural height — no squashing; extra area stays solid yellow */
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
              <div className="flex flex-col items-center text-center ds-anim-fade-up">
                <IconStreetCart className="mx-auto h-10 w-10 text-[var(--rk-orange)] sm:h-16 sm:w-16 md:h-[72px] md:w-[72px]" />
                <p className="mt-2 max-w-[8.5rem] text-[13px] font-semibold leading-snug text-[var(--rk-deep)] sm:mt-4 sm:max-w-[12rem] sm:text-base">
                  Street Style Classics
                </p>
              </div>
              <div className="flex flex-col items-center text-center ds-anim-fade-up [animation-delay:70ms]">
                <IconGourmetCloche className="mx-auto h-10 w-10 text-[var(--rk-orange)] sm:h-16 sm:w-16 md:h-[72px] md:w-[72px]" />
                <p className="mt-2 max-w-[9.5rem] text-[13px] font-semibold leading-snug text-[var(--rk-deep)] sm:mt-4 sm:max-w-[14rem] sm:text-base">
                  Gourmet Street Creations
                </p>
              </div>
              <div className="flex flex-col items-center text-center ds-anim-fade-up [animation-delay:140ms]">
                <IconHealthyHeart className="mx-auto h-10 w-10 text-[var(--rk-orange)] sm:h-16 sm:w-16 md:h-[72px] md:w-[72px]" />
                <p className="mt-2 max-w-[9rem] text-[13px] font-semibold leading-snug text-[var(--rk-deep)] sm:mt-4 sm:max-w-[12rem] sm:text-base">
                  Healthy Street Bites
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* —— Part 3: A Story from the Streets — part3_bg.png —— */}
      <div id="story" className="relative bg-[var(--rk-surface)] scroll-mt-16">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/part3_bg.png"
            alt=""
            fill
            className="object-cover object-left object-top"
            sizes="100vw"
            priority={false}
          />
        </div>

        <Container className="relative z-10 px-5 pb-16 md:px-6 md:pb-20 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="ds-anim-fade-up flex justify-center lg:order-1 lg:justify-start">
              <div className="relative w-full max-w-[min(100%,540px)]">
                <Image
                  src="/excellence.png"
                  alt="Misal Pav and Indian street food spread"
                  width={689}
                  height={644}
                  sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 90vw"
                  className="h-auto w-full object-contain"
                  priority={false}
                />
              </div>
            </div>

            <div className="ds-anim-fade-up max-w-xl lg:order-2 [animation-delay:80ms]">
              <h2
                id="rekadi-story-heading"
                className="ds-h2 text-[var(--rk-orange)]"
              >
                A Story from the Streets
              </h2>
              <p className="mt-5 italic leading-snug text-[var(--rk-deep)] ds-body-sm">
                In every corner of India, street carts bring people together
                over food, conversations, and memories. Rekadi is inspired by
                that feeling.
              </p>
              <ul className="mt-8 list-disc space-y-2.5 pl-5 text-[var(--rk-deep)] marker:text-[var(--rk-deep)] ds-body-sm">
                {STORY_POINTS.map((item) => (
                  <li key={item} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <OrderNowCta />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* —— Bar below Part 3 (outlined marquee) —— */}
      <section
        aria-label="Popular food marquee"
        className="w-full bg-[var(--rk-sun)] py-6 md:py-7"
      >
        <div className="ds-marquee">
          <div
            className="ds-marquee-track items-center gap-10 pr-10"
            style={{ animationDuration: "34s" }}
          >
            {marqueeItems.map((id, idx) => (
              <div
                key={id}
                className="flex items-center gap-10 whitespace-nowrap"
                aria-hidden={idx > 0}
              >
                <span
                  className="font-[family-name:var(--font-display)] font-bold uppercase leading-none tracking-[0.02em] text-transparent"
                  style={{
                    WebkitTextStroke: "2px var(--rk-orange)",
                    fontSize: "clamp(44px, 6vw, 76px)",
                  }}
                >
                  POPULAR FOOD
                </span>
                <Image
                  src="/barlogo.png"
                  alt=""
                  width={92}
                  height={66}
                  className="h-11 w-auto md:h-12"
                  aria-hidden="true"
                />
                <span
                  className="font-[family-name:var(--font-display)] font-bold uppercase leading-none tracking-[0.02em] text-transparent"
                  style={{
                    WebkitTextStroke: "2px var(--rk-orange)",
                    fontSize: "clamp(44px, 6vw, 76px)",
                  }}
                >
                  DELICIOUS FOOD
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
