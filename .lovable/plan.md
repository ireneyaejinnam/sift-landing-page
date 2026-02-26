

# Sift — NYC Event Discovery Landing Page

A single-page waitlist landing page for Sift, built with precise adherence to the brand style guide: Merriweather + Inter fonts, Steel Blue / Warm Stone / Dark Teal color palette, calm and confident tone.

## Sections to Build

### 1. Sticky Navigation Bar
- "Sift" wordmark (Merriweather **Italic**) on the left, "Join the Waitlist" button (Steel Blue filled) on the right
- Transparent at page top, gains background on scroll
- CTA smooth-scrolls to the waitlist section

### 2. Hero Section
- Display headline (Merriweather, 2.75rem): *"Stop scrolling six apps just to figure out what to do this weekend."*
- Subheadline (Inter): *"You don't need more options. You need the right 3–5, matched to what you actually care about — before they're gone."*
- Supporting line (Inter small, Slate): *"Tell us what you're into, when you're free, and how far you'll go. We'll tell you what's worth your time."*
- Primary CTA button: "Show me what's happening →"
- Max 720px content width, generous vertical spacing

### 3. How It Works
- Section headline (Merriweather H2): *"Three filters. Five recommendations. Zero rabbit holes."*
- Three vertical steps with descriptions for category, constraints (budget prominent), and shortlist
- Three example recommendation cards (side-by-side on desktop, stacked on mobile):
  - Kehinde Wiley art exhibit (free, Chelsea, "Ends in 17 days")
  - Spring Foraging Walk (free, Brooklyn, "This Saturday")
  - Late-Night Comedy Lottery ($10, East Village)
- Each card with category pill, match reasoning line, proper left accent border, and styling per the component spec

### 4. Social Proof
- Headline: *"Built from conversations with 50+ New Yorkers who were tired of the same weekend."*
- Three interview quote cards in styled blockquotes (Sam, NYC resident, Pilates instructor)
- Three stat callouts below (87% multi-platform, 6 in 10 gave up, #1 pain point)

### 5. Objection Handling (FAQ Accordion)
- Six Q&A items using accordion pattern:
  - "How is this different from Fever or Eventbrite?"
  - "What if the recommendations aren't good?"
  - "I just ask my friends for recommendations."
  - "I don't want another app to check."
  - "Is Sift free?"
  - "What about my privacy?"
- Copy pulled directly from brand-position.md + user-specified additions

### 6. Waitlist CTA Section
- Headline: *"Your weekend shouldn't take longer to plan than to enjoy."*
- Body copy about building the simplest way to find things worth doing
- Email input + "Join the Waitlist" button (form posts to placeholder URL)
- Hidden field capturing UTM parameters from URL
- Category quick-qualify pills (multi-select toggle): Live music, Art exhibitions, Pop-ups & sample sales, Outdoor activities, Fitness classes, Comedy & shows, Food events, I just want something new
- Selected categories included in form submission
- Subtext: "Early access opens Spring 2026."

### 7. Footer
- "Sift" wordmark (Merriweather **Italic**) + "Made in NYC" tagline
- Minimal, clean

## Design & Technical Details
- **Fonts**: Google Fonts — Merriweather (400, **400 italic**, 500, 700) + Inter (400, 500, 600) with font-display: swap. The "Sift" wordmark uses Merriweather Italic everywhere it appears.
- **Colors**: Custom CSS variables mapping the full Sift palette (Steel Blue #547AA5, Warm Stone #A68B6B, Slate #4F5165, Off-White #EFEFF0, Dark Teal #293132, Error Red)
- **Mobile-first**: Responsive down to 375px; display text scales down per style guide
- **Scroll tracking**: Console.log at 25%, 50%, 75%, 100% scroll depth
- **Entrance animations**: Subtle fade-up on scroll using Intersection Observer, restrained timing
- **Accessibility**: Proper heading hierarchy (h1→h2→h3), focus rings on all interactive elements, WCAG AA contrast
- **UTM preservation**: Parse URL params on load, inject into hidden form fields
- **No images, no parallax, no heavy animation** — just clean typography and well-spaced content

