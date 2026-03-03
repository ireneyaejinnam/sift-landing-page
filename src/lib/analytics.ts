type EventName =
  | "hero_cta_click"
  | "navbar_cta_click"
  | "waitlist_submit"
  | "category_select"
  | "category_deselect"
  | "faq_open"
  | "scroll_depth";

type EventProperties = Record<string, string | number | boolean>;

export function trackEvent(event: EventName, properties?: EventProperties) {
  const payload = {
    event,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    referrer: document.referrer,
    ...properties,
  };

  console.log(`[Analytics] ${event}`, payload);

  // Future: send to your analytics endpoint
  // navigator.sendBeacon("/api/track", JSON.stringify(payload));
}
