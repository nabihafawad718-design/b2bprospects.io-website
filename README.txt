B2BProspects clean-URL + CTA final patch

This patch is based directly on the supplied clean-URLs website package.
It changes ONLY the affected HTML files.

1. Fixes broken protocol-relative asset paths such as //assets/, //css/, and //js/ to root-relative paths (/assets/, /css/, /js/) so CSS, JS, and images load on clean URLs.
2. Fixes accidental double slashes in b2bprospects.io canonical/OG/schema URLs.
3. Changes ONLY CTA-style links that pointed to /chrome-extension/ so they point to the published Chrome Web Store listing for B2BProspects.io.
4. Leaves normal navigation links to /chrome-extension/ unchanged.
5. Does not change CSS, images, page copy, layout, or other functionality.

Upload the files in this ZIP to the clean-urls branch, preserving their folder paths, and replace the existing versions. There are fewer than 100 files in this patch.
