const POSTHOG_API_KEY = 'phc_LRnZeqxgcDNDAnrXSVJV6wfiVBXGQDGef0mW1JF8WKF';
const POSTHOG_ENDPOINT = 'https://us.i.posthog.com/capture/';

type EventName =
  | "hero_cta_click"
  | "navbar_cta_click"
  | "waitlist_submit"
  | "category_select"
  | "category_deselect"
  | "faq_open"
  | "scroll_depth";

type EventProperties = Record<string, string | number | boolean>;

let distinctId = localStorage.getItem('ph_distinct_id');
if (!distinctId) {
  distinctId = crypto.randomUUID();
  localStorage.setItem('ph_distinct_id', distinctId);
}

export function trackEvent(event: EventName, properties?: EventProperties) {
  const payload = {
    api_key: POSTHOG_API_KEY,
    event,
    properties: {
      distinct_id: distinctId,
      url: window.location.href,
      referrer: document.referrer,
      ...properties,
    },
    timestamp: new Date().toISOString(),
  };

  navigator.sendBeacon(POSTHOG_ENDPOINT, JSON.stringify(payload));
}
