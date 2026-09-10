# ECA light editorial rebuild

## What will change

- Replace the homepage carousel and product tray with one strong light hero using white-background equipment photography, direct copy, a quotation action, and a shop action.
- Remove dark mode entirely, including the switch, alternate colors, and unused theme code.
- Give the site a more human editorial rhythm using restrained blue and orange color bands, print-like rules, occasional photography, and varied section compositions without making every section decorative.
- Replace the current short product sample with all 165 products from the uploaded August 2026 catalogue. Show every item as in stock and omit prices everywhere.
- Turn Insights into a working blog: article cards will link to dedicated article pages with full practical content, related reading, quotation/shop actions, and article metadata.
- Remove dead carousel assets, obsolete price-list logic, duplicate theme code, unused imports, and comments that no longer describe the site.

## Content and page behavior

- Product names will follow the uploaded catalogue, with sensible catalogue categories and generated internal SKUs where the PDF supplies none.
- The public product catalogue and exports will contain product name, category, unit, and in-stock status only.
- Existing routes and main navigation remain intact. `/insights/$slug` will be added for individual articles.
- Existing claims and contact details remain unchanged unless the new layout requires shorter wording.

## Technical details

- Follow the project's updated routing structure rather than preserving the previous file-based setup, and use `npm run build` for verification.
- Consolidate article data into one shared module so index pages, detail pages, and structured data use one source.
- Use semantic light-only color tokens in the global stylesheet; remove the dark variant and theme provider.
- Validate the homepage, products page, insights index, and an article page in the browser on desktop and mobile, then confirm the latest preview build is clean.
