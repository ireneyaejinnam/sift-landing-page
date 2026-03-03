

## Fix: Waitlist confirmation message invisible after submission

### Problem
The waitlist form **is working correctly** — emails are being saved to the database (I verified 2 test entries). The issue is a **UI bug**: after successful submission, the "You're on the list" confirmation message is invisible.

The confirmation `<div>` has the `fade-up` CSS class, which starts elements at `opacity: 0` and `translateY`. The `IntersectionObserver` in `useScrollReveal()` adds a `visible` class to trigger the animation. But the observer only scans for `.fade-up` elements on initial mount — when the confirmation div renders dynamically after submission, the observer never sees it, so it stays invisible.

### Fix
Remove the `fade-up` class from the confirmation message div in `WaitlistCTA.tsx` (line ~79). The confirmation should appear immediately without a scroll-reveal animation.

Change:
```tsx
<div className="fade-up mt-10 rounded-lg border border-border bg-card p-8">
```
To:
```tsx
<div className="mt-10 rounded-lg border border-border bg-card p-8">
```

This is a one-line fix. The database integration is fully operational — no backend changes needed.

