import posthog from 'posthog-js';

posthog.init('phc_LRnZeqxgcDNDAnrXSVJV6wfiVBXGQDGef0mW1JF8WKF', {
  api_host: 'https://app.posthog.com',
  capture_pageview: false,
});

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
  posthog.capture(event, {
    url: window.location.href,
    referrer: document.referrer,
    ...properties,
  });
}
