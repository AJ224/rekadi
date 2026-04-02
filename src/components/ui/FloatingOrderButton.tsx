"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";

import { CartIcon } from "@/components/icons/CartIcon";
import urls from "@/config/urls.json";

type MenuItem = {
  key: string;
  label: string;
  href: string;
  subLabel?: string;
  icon: React.ReactNode;
  external?: boolean;
};

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

function IconBag(props: Readonly<{ className?: string }>) {
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
      <path d="M6 8h12l-1 13H7L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function FloatingOrderButton() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onOpenOrderModal() {
      setOpen(true);
    }
    globalThis.addEventListener("rekadi:open-order-modal", onOpenOrderModal);
    return () => {
      globalThis.removeEventListener("rekadi:open-order-modal", onOpenOrderModal);
    };
  }, []);

  const items = useMemo<MenuItem[]>(() => {
    const list: MenuItem[] = [
      {
        key: "takeaway",
        label: "Takeaway",
        subLabel: "Menu card",
        href: urls.takeawayUrl ?? "",
        icon: <IconBag className="size-4 text-[var(--rk-deep)]" />,
      },
      {
        key: "direction",
        label: "Get Direction",
        subLabel: "Open in Maps",
        href: urls.locationUrl ?? "",
        icon: <IconPin className="size-4 text-[var(--rk-deep)]" />,
      },
      {
        key: "zomato",
        label: "Order on Zomato",
        href: urls.zomatoUrl ?? "",
        icon: (
          <Image
            src="/zomato.webp"
            alt=""
            width={22}
            height={22}
            className="h-[22px] w-[22px] object-contain"
          />
        ),
        external: true,
      },
      {
        key: "swiggy",
        label: "Order on Swiggy",
        href: urls.swiggyUrl ?? "",
        icon: (
          <Image
            src="/swigy.png"
            alt=""
            width={22}
            height={22}
            className="h-[22px] w-[22px] object-contain"
          />
        ),
        external: true,
      },
    ];

    return list.filter((i) => (i.href ?? "").trim().length > 0);
  }, []);

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

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
  }, [open]);

  if (items.length === 0) return null;

  return (
    <div
      ref={rootRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {open ? (
        <dialog
          open
          className="fixed inset-0 z-[60] m-0 h-full w-full bg-transparent p-0"
          aria-label="Order options"
          onClick={() => setOpen(false)}
          onKeyDown={() => {}}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 grid place-items-center p-4">
            <div
              id={panelId}
              role="menu"
              className="w-[min(420px,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-zinc-900/10 bg-white/95 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur"
              tabIndex={-1}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 px-5 pb-3 pt-5">
                <div className="min-w-0">
                  <div className="text-sm font-extrabold tracking-wide text-[var(--rk-deep)]">
                    Order Now
                  </div>
                  <div className="mt-1 text-xs font-semibold text-zinc-600">
                    Choose where you want to order from
                  </div>
                </div>
                <button
                  type="button"
                  ref={closeButtonRef}
                  onClick={() => setOpen(false)}
                  className="shrink-0 rounded-xl px-3 py-2 text-xs font-extrabold text-[var(--rk-deep)] transition hover:bg-zinc-900/5 active:bg-zinc-900/10"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-1 px-3 pb-4">
                {items.map((item) => {
                  const isExternal =
                    (item.external ??
                      (item.href.startsWith("http://") || item.href.startsWith("https://"))) &&
                    !item.href.startsWith("#") &&
                    !item.href.startsWith("tel:");
                  return (
                    <a
                      key={item.key}
                      role="menuitem"
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-2xl px-3 py-3 transition hover:bg-zinc-900/5 active:bg-zinc-900/10"
                      onClick={() => setOpen(false)}
                    >
                      <span className="grid size-10 place-items-center rounded-2xl bg-[var(--rk-surface)] text-[var(--rk-deep)]">
                        {item.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-extrabold text-[var(--rk-deep)]">
                          {item.label}
                        </span>
                        {item.subLabel ? (
                          <span className="block truncate text-xs font-semibold text-zinc-600">
                            {item.subLabel}
                          </span>
                        ) : null}
                      </span>
                      <span className="ml-auto text-zinc-400 transition group-hover:text-zinc-700">
                        ›
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </dialog>
      ) : null}

      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-3 rounded-2xl border border-zinc-900/10 bg-white/55 px-5 py-4 text-[var(--rk-deep)] shadow-[0_16px_30px_rgba(0,0,0,0.18)] backdrop-blur transition hover:bg-white/65 active:translate-y-[1px]"
      >
        <span className="grid size-9 place-items-center rounded-xl bg-[var(--rk-surface)]">
          <CartIcon className="size-5" />
        </span>
        <span className="text-sm font-extrabold tracking-wide">
          {open ? "Close" : "Order Now"}
        </span>
      </button>
    </div>
  );
}

