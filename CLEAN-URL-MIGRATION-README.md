# B2BProspects clean-URL migration

This package was generated from the supplied `b2bprospects.io-website-main.zip`.

## What changed
- Preserved all original site assets, configuration files, and documentation.
- Kept the root `index.html`.
- Added `/page/index.html` for every non-homepage HTML page.
- Updated internal page links to clean trailing-slash URLs.
- Updated canonical URLs and `sitemap.xml`.
- Converted page asset references to root-relative paths so CSS, JS, and images continue working from nested folders.
- Kept each original `.html` URL as a small redirect page instead of deleting it.

## Important
GitHub Pages does not provide a simple server-side 301 redirect mechanism for a plain static site. The preserved `.html` pages therefore use a client-side redirect plus `noindex` and a canonical URL.

## Before publishing
Do not delete the current repository or overwrite it blindly. Commit this migration on a separate branch first, preview/test the Pages build, then merge after checking the clean URLs, old `.html` URLs, navigation, assets, forms, and the sitemap.
