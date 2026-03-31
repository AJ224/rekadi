import Image from "next/image";

import { Container } from "@/components/ui/Container";
import urls from "@/config/urls.json";

type FooterLink = { label: string; href: string };

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full max-w-none shrink-0 overflow-hidden rounded-t-[40px] bg-[#002B2B] text-white md:min-h-[420px]"
    >
      {/* background artwork — cover full width (no side “margins” from letterboxing) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/footer_bg.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* mascot artwork (bottom-right) */}
      <div className="pointer-events-none absolute bottom-[-10px] right-2 z-[5] w-[240px] md:bottom-[-18px] md:right-4 md:w-[340px] lg:bottom-[-24px] lg:right-6 lg:w-[420px]">
        <Image
          src="/footer_mascout.png"
          alt=""
          width={760}
          height={805}
          priority={false}
          className="h-auto w-full object-contain"
        />
      </div>

      <Container className="relative z-10 py-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-[1fr_1.1fr_0.9fr_1fr] md:gap-6 md:text-left lg:gap-10">
          {/* 1) Logo */}
          <div className="ds-anim-fade-up flex flex-col items-center md:items-start">
            <Image
              src="/footer_logo.png"
              alt="Rekadi"
              width={180}
              height={96}
              priority={false}
              className="h-auto w-[120px] md:w-[140px] lg:w-[160px]"
            />
            <div className="mt-4 max-w-xs text-sm font-semibold text-white/75 md:mt-5">
              Street food, reimagined — bold flavours, hygienic prep, and quick service.
            </div>
          </div>

          {/* 2) Info */}
          <div className="ds-anim-fade-up [animation-delay:60ms]">
            <h3
              className="text-lg font-semibold leading-none text-[var(--rk-orange)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Info
            </h3>
            <div className="mt-4 space-y-3 text-white/85">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <IconPhone className="size-4 shrink-0 text-white/75" />
                <a
                  className="text-sm font-semibold transition hover:text-white"
                  href={urls.callUrl}
                >
                  +91 77700 60305
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <IconMail className="size-4 shrink-0 text-white/75" />
                <a
                  className="text-sm font-semibold transition hover:text-white"
                  href="mailto:info@rekadi.com"
                >
                  info@rekadi.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <IconClock className="size-4 shrink-0 text-white/75" />
                <div className="text-sm font-semibold">
                  Delivery: 8 AM to 10 PM
                </div>
              </div>
            </div>
          </div>

          {/* 3) Links */}
          <FooterCol
            title="Links"
            className="text-center md:text-left [animation-delay:120ms]"
            links={[
              { label: "About Us", href: "#about" },
              { label: "Our Story", href: "#story" },
              { label: "Contact Us", href: urls.callUrl },
              { label: "Help & Support", href: urls.callUrl },
              { label: "Privacy Policy", href: "#privacy" },
            ]}
          />

          {/* 4) Social + Order now */}
          <SocialCol />
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  className,
}: Readonly<{ title: string; links: FooterLink[]; className?: string }>) {
  return (
    <div className={`ds-anim-fade-up ${className ?? ""}`}>
      <h3
        className="text-lg font-semibold leading-none text-[var(--rk-orange)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm font-semibold leading-snug text-white/80 transition hover:text-white"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialCol() {
  const orderIcons = [
    {
      key: "zomato",
      label: "Zomato",
      href: urls.zomatoUrl ?? "",
      icon: <BrandMark label="Z" className="bg-[#E23744] text-white" />,
    },
    {
      key: "swiggy",
      label: "Swiggy",
      href: urls.swiggyUrl ?? "",
      icon: <BrandMark label="S" className="bg-[#FC8019] text-white" />,
    },
    {
      key: "petpooja",
      label: "Petpooja",
      href: urls.petpoojaUrl ?? "",
      icon: <BrandMark label="P" className="bg-[#00AEEF] text-white" />,
    },
  ];

  return (
    <div className="ds-anim-fade-up">
      <h3
        className="text-lg font-semibold leading-none text-[var(--rk-orange)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Social Media
      </h3>
      <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
        <a
          href={urls.instagramUrl ?? "https://www.instagram.com/"}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition hover:bg-white/20"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconInstagram className="size-5 text-white" />
        </a>
        <a
          href={urls.facebookUrl ?? "https://www.facebook.com/"}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition hover:bg-white/20"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconFacebook className="size-5 text-white" />
        </a>
      </div>

      <div className="mt-6">
        <div
          className="text-sm font-extrabold tracking-wide text-white/90"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Order Now
        </div>
        <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
          {orderIcons.map((o) => {
            const enabled = (o.href ?? "").trim().length > 0;
            const isExternal = enabled && !o.href.startsWith("#") && !o.href.startsWith("tel:");
            return enabled ? (
              <a
                key={o.key}
                href={o.href}
                className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition hover:bg-white/20"
                aria-label={o.label}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {o.icon}
              </a>
            ) : (
              <div
                key={o.key}
                className="inline-flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 opacity-60"
                aria-label={o.label}
                title={`${o.label} (coming soon)`}
              >
                {o.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Icons ── */

function BrandMark({
  label,
  className,
}: Readonly<{
  label: string;
  className: string;
}>) {
  return (
    <span
      className={`grid size-6 place-items-center rounded-md text-[12px] font-extrabold ${className}`}
      aria-hidden="true"
    >
      {label}
    </span>
  );
}

function IconPin(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconPhone(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M22 16.9v2a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 10.5a16 16 0 0 0 5.5 5.5l1.1-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function IconMail(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function IconClock(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function IconInstagram(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function IconFacebook(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.5 1.5-1.5H16.7V5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8V11H6.6v3h2.6v8h4.3Z" />
    </svg>
  );
}