 "use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

import { CartIcon } from "@/components/icons/CartIcon";
import { Container } from "@/components/ui/Container";
import { CtaButtonLink } from "@/components/ui/CtaButtonLink";
import urls from "@/config/urls.json";

function IconMenu(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);

  const links: Array<{ label: string; href: string }> = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#signature-bites" },
    { label: "Our Story", href: "#story" },
    { label: "Contact Us", href: urls.callUrl },
  ];

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current) return;
      if (rootRef.current.contains(e.target as Node)) return;
      setOpen(false);
    }

    if (!open) return;
    globalThis.addEventListener("keydown", onKeyDown);
    globalThis.addEventListener("pointerdown", onPointerDown);
    return () => {
      globalThis.removeEventListener("keydown", onKeyDown);
      globalThis.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="border-b border-zinc-900/10 bg-[var(--rk-surface)]">
      <Container className="grid h-20 grid-cols-[auto_1fr_auto] items-center">
        <a
          href="#top"
          className="inline-flex items-center gap-3 ds-anim-fade-in"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/LOGO_1 1.png"
            alt="Rekadi"
            width={52}
            height={52}
            priority
            className="rounded-full"
          />
          <span className="sr-only">Rekadi</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center justify-center gap-10 text-base font-semibold text-zinc-900/80 md:flex ds-anim-fade-in">
          {links.map((t) => (
            <a
              key={t.label}
              href={t.href}
              className="whitespace-nowrap transition hover:text-zinc-900"
            >
              {t.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          {/* Mobile: hamburger on right end (no Order Now in navbar) */}
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-900/10 bg-white/55 px-4 py-3 text-[var(--rk-deep)] shadow-[0_10px_20px_rgba(0,0,0,0.12)] backdrop-blur transition hover:bg-white/65 active:translate-y-[1px] md:hidden"
          >
            <IconMenu className="size-6" />
            <span className="sr-only">Open menu</span>
          </button>

          <CtaButtonLink
            href={urls.orderNowUrl}
            variant="navbar"
            className="!hidden md:!inline-flex ds-anim-fade-in"
          >
            <CartIcon className="size-5" />
            Order Now
          </CtaButtonLink>
        </div>

        {/* Mobile drawer */}
        {open ? (
          <div
            ref={rootRef}
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-y-0 left-0 w-[min(86vw,360px)] overflow-y-auto bg-[var(--rk-surface)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between px-5 py-5">
                <div className="inline-flex items-center gap-3">
                  <Image
                    src="/LOGO_1 1.png"
                    alt="Rekadi"
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                  <div className="text-base font-extrabold text-[var(--rk-deep)]">
                    Rekadi
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-bold text-[var(--rk-deep)] transition hover:bg-black/5"
                >
                  Close
                </button>
              </div>

              <div className="px-4 pb-6">
                <div className="grid gap-1">
                  {links.map((t) => {
                    return (
                      <a
                        key={t.label}
                        href={t.href}
                        onClick={() => setOpen(false)}
                        className="rounded-2xl px-4 py-3 text-base font-extrabold text-[var(--rk-deep)] transition hover:bg-black/5"
                      >
                        {t.label}
                      </a>
                    );
                  })}
                </div>

                <div className="mt-5">
                  <CtaButtonLink
                    href={urls.orderNowUrl}
                    variant="hero"
                    className="w-full justify-center"
                    onClick={() => setOpen(false)}
                  >
                    <CartIcon className="size-5" />
                    Order Now
                  </CtaButtonLink>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}

