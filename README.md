# Make Do & Save

**Candidate rebuild in progress. Production/main is not changed by this branch.**

Make Do & Save is a practical, personal household-economy website built around one ongoing question: can an ordinary person get financially healthier and live better by cooking properly, wasting less, repairing things, buying deliberately, learning useful older household skills and gradually paying down debt — without making life miserable?

## Candidate information architecture
Home · Blog · Money · Food · Mend · Old Lessons · About

The site is static-first HTML/CSS with a small progressive-enhancement script for the mobile menu. Core content and navigation remain available without JavaScript.

## Candidate vertical slice
- editorial homepage
- reusable current-experiment treatment
- four practical-library discovery cards
- The Reckoning debt/progress module
- Latest From the House
- Food/Money/Mend/Old Lessons landing pages
- full recipe presentation shell for Mushroom, Pepper, Savoy & Cheese Pasta
- living-blog article shell
- comments/community presentation
- mobile/reduced-motion/accessibility treatment

## Truth and placeholders
The design direction is not treated as factual data. Missing current debt balance, recipe quantities/cost/nutrition, reader comments, dates and photography are explicitly labelled rather than invented.

## Local review
No build step is required. Serve the repository root with a static HTTP server, e.g. `python3 -m http.server 8000`.

## Release
This candidate must not be merged, deployed or published without separate authority and release verification.