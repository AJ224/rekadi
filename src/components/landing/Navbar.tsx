import Image from "next/image";

import { CartIcon } from "@/components/icons/CartIcon";
import { Container } from "@/components/ui/Container";
import { CtaButtonLink } from "@/components/ui/CtaButtonLink";
import urls from "@/config/urls.json";

export function Navbar() {
  const links: Array<{ label: string; href: string }> = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="border-b border-zinc-900/10 bg-[var(--rk-surface)]">
      <Container className="grid h-20 grid-cols-[auto_1fr_auto] items-center">
        <a href="#top" className="inline-flex items-center gap-3 ds-anim-fade-in">
          <Image
            src="/LOGO_1 1.png"
            alt="Bowl Diaries"
            width={56}
            height={56}
            priority
            className="rounded-full"
          />
          <span className="sr-only">Bowl Diaries</span>
        </a>

        <nav className="hidden items-center justify-center gap-12 text-base font-semibold text-zinc-900/80 md:flex ds-anim-fade-in">
          {links.map((t) => (
            <a key={t.label} href={t.href} className="transition hover:text-zinc-900">
              {t.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <CtaButtonLink
            href={urls.orderNowUrl}
            variant="navbar"
            className="hidden md:inline-flex ds-anim-fade-in"
          >
            <CartIcon className="size-5" />
            Order Now
          </CtaButtonLink>
        </div>
      </Container>
    </header>
  );
}

