import { useEffect, useRef, useCallback } from "react";
import { trackEvent } from "@/lib/analytics";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = el.querySelectorAll(".fade-up");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useScrollDepthTracking() {
  const fired = useRef(new Set<number>());

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const pct = (scrollTop / docHeight) * 100;

    [25, 50, 75, 100].forEach((milestone) => {
      if (pct >= milestone && !fired.current.has(milestone)) {
        fired.current.add(milestone);
        trackEvent("scroll_depth", { milestone });
        console.log(`Scroll depth: ${milestone}%`);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
}

export function getUTMParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
    const val = params.get(key);
    if (val) utms[key] = val;
  });
  return utms;
}
