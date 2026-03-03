

## Plan: Fix location pills, update neighborhoods, and move image credits to footer

### Changes

**1. Update locations in `HowItWorks.tsx`**

Update `recommendations` details and `detailViews` locations:
- Card 1 (Happy Medium): location → "Brooklyn", details → "happy-medium.co · Classes available · Brooklyn"
- Card 2 (Orchid Show): location → "Bronx", details → "NYBG · Bronx · Timed entry" (already correct)
- Card 3 (Sample Sale): location → "Midtown South", details → "15 E 37th St · Mar 3–9 · Midtown South"

**2. Remove image source credits from the detail view image overlay**

Remove the `<span>` showing `currentDetail.source` at bottom-right of the event photo in the detail view (line 252-254).

**3. Add image credits to `Footer.tsx`**

Add a tiny credit line below the existing footer content:
```
Images: Happy Medium (Yelp) · Orchid Show (NYBG) · Sample Sale (@wefashion_samplesale/Instagram)
```
Styled with `text-[9px] text-muted-foreground/50` — barely visible but present for attribution.

