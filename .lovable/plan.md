## Plan: Replace mockup event cards with real NYC events

### What changes

Update the 3 event cards inside the iPhone mockup in `HowItWorks.tsx` with real NYC events, adding thumbnail images to each card in the list view and updating the detail view (shown on tap animation) to feature the NYBG Orchid Show.

### Steps

1. **Copy 3 images to `src/assets/**`
  - `preview.webp` → `src/assets/happy-medium.webp` (art cafe interior)
  - `preview_2.webp` → `src/assets/orchid-show.webp` (pink orchids)
  - `preview_3.webp` → `src/assets/stuart-weitzman-sale.webp` (boots flyer)
2. **Update `HowItWorks.tsx**`
  - Import the 3 new images (replace `prospectParkImg` import)
  - Update `recommendations` array with new content:
    - Card 1: "Happy Medium — Art Cafe & Pottery Studio" / Arts / "happy-medium.co · Classes available · NYC"
    - Card 2: "The Orchid Show: Concrete Jungle" / Nature · Arts / "NYBG · Bronx · Timed entry"
    - Card 3: "Stuart Weitzman & Carlisle Sample Sale" / Shopping / "15 E 37th St · Mar 3–9 · NYC"
  - DO NOT Add image field to each recommendation and render a small thumbnail (rounded, ~32×32px) on the left side of each card, replacing the colored dot - leave the colored dot as is but only add the image in `detailView`
  - Add small source credit text at the bottom-right of each thumbnail (e.g., "Yelp", "NYBG", "Instagram") in light/muted color
  - Update `detailView` to show card 1 as the expanded detail, with the orchid image, updated description, tags, date/price info
  - Make the action click and open three different detailView, one for each card with the details of each in consecutive motion of click card 1 --> card 1 details --> back to three cards --> click card 2 --> card 2 details --> ...
  - Update the tap animation to highlight card index (selected) during the "tapping" state (already targets index 1)
3. **Keep existing behavior intact**
  - Same card layout structure, animation loop, and timing
  - Same phone mockup dimensions and styling
  - Cards remain non-interactive (decorative mockup)

### Technical details

- Images imported as ES6 modules from `src/assets/`
- Thumbnail rendered as `<img>` with `object-cover` and fixed dimensions inside the card flex layout
- Source credits rendered as `<span>` with `text-[6px] text-secondary/50` positioned absolute bottom-right of the image container