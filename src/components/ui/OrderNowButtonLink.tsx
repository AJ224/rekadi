"use client";

import type { MouseEventHandler } from "react";

import { CtaButtonLink } from "@/components/ui/CtaButtonLink";
import urls from "@/config/urls.json";

type OrderNowButtonLinkProps = Readonly<{
  className?: string;
  variant?: "hero" | "menuCard" | "floating" | "promoBar" | "navbar";
  children: React.ReactNode;
  onBeforeOpen?: () => void;
}>;

export function OrderNowButtonLink({
  className,
  variant,
  children,
  onBeforeOpen,
}: OrderNowButtonLinkProps) {
  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    onBeforeOpen?.();
    globalThis.dispatchEvent(new Event("rekadi:open-order-modal"));
  };

  return (
    <CtaButtonLink
      href={urls.orderNowUrl}
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {children}
    </CtaButtonLink>
  );
}

