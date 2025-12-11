"use client";

import Link from "next/link";

interface Props extends React.ComponentProps<typeof Link> {
  href: string;
}

export function ExternalLink({ href, ...rest }: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Para links externos, abre em nova aba
    if (href.startsWith("http")) {
      e.preventDefault();
      window.open(href, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <Link
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick} // ✔️ Agora usando onClick (NEXT.JS)
    />
  );
}
