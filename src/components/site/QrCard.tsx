"use client";

import { useEffect, useState } from "react";

/** Renders a real scannable QR code for a URL, generated in the browser. */
export function QrCard({
  url,
  caption,
  size = 168,
  className = "",
}: {
  url: string;
  caption?: string;
  size?: number;
  className?: string;
}) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const { toDataURL } = await import("qrcode");
      const png = await toDataURL(url, {
        width: size * 2,
        margin: 1,
        color: { dark: "#0B324F", light: "#FFFFFF" },
      });
      if (!cancelled) setDataUrl(png);
    })();
    return () => {
      cancelled = true;
    };
  }, [url, size]);

  return (
    <figure className={`inline-flex flex-col items-center gap-3 ${className}`}>
      <div
        className="sheen float-slow grid place-items-center bg-card p-3"
        style={{ width: size + 24, height: size + 24 }}
      >
        {dataUrl ? (
          <img src={dataUrl} alt={`QR code linking to ${url}`} width={size} height={size} />
        ) : (
          <span className="text-xs text-muted-foreground">Generating…</span>
        )}
      </div>
      {caption ? (
        <figcaption className="max-w-[220px] text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
