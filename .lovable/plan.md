

## Assessment: Raw HTTP API vs PostHog SDK Snippet

**The raw HTTP API approach (already implemented) is the better choice for this project.** Here's why:

### Raw HTTP API (current) wins because:
- **Zero dependencies** — no extra JS bundle weight on a landing page where performance matters
- **Already working** — `navigator.sendBeacon` is fire-and-forget, non-blocking, and survives page unloads
- **Sufficient for your use case** — you're tracking ~7 specific manual events, not using autocapture, session replay, or feature flags
- **Simpler** — 36 lines of code vs loading a full SDK

### The HTML snippet would give you:
- Autocapture (clicks, pageviews automatically) — you don't need this since you're tracking specific events
- Session replay, feature flags, surveys — not relevant for a pre-launch landing page
- Better batching/retry — marginal benefit for low-traffic waitlist page

### Recommendation
**No changes needed.** The current `src/lib/analytics.ts` using the raw HTTP API is already the right approach. All 7 events (hero CTA, navbar CTA, waitlist submit, category select/deselect, FAQ open, scroll depth) are firing to PostHog's US endpoint via `sendBeacon`.

If you later need autocapture or session replay post-launch, switching to the SDK at that point would make sense.

