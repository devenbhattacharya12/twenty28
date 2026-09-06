# Twenty28 Ventures — HBS Class of 2028 Fund

A single-page static site for the Class of 2028 class fund, modeled on the structure of the
Class of 2026 site (hero, opportunity, deal criteria, terms, FAQ, advisory board, team).

No build step and no dependencies. Three files do the work.

| File | What it holds |
| --- | --- |
| `index.html` | All page copy and structure |
| `styles.css` | Design tokens at the top, then sections in page order |
| `people.js` | The advisory board and team lists |
| `main.js` | Renders the people grids, scroll reveals, footer year |

## Run it locally

```bash
python3 -m http.server 8000 --directory /Users/devenbhattacharya/coding_project/hbs-class-2028-fund
```

Then open `http://localhost:8000`.

## Colors

The palette comes from the HBS site's own CSS custom properties, read directly from hbs.edu:
crimson `#a41034`, highlight `#e80538`, complementary ground `#f6f4f2`, inverse `#222222`, text at 85/66/55%
black. They live in the `:root` block at the top of `styles.css`.

**No HBS logo, shield, or wordmark appears anywhere on the site**, and the footer states plainly that the fund
is unaffiliated with Harvard and does not use its marks. Keep it that way. Color alone is not a claim of
endorsement, but a shield would be.


The footer states that the fund is unaffiliated with Harvard, does not use its marks, and that the page is not
an offer of securities. Have counsel review that language.

## Deploy

Hosted on Render as a static site. `render.yaml` is a blueprint, so Render reads the settings from the repo
instead of asking you to fill in a form: no build step, publish the repo root, three security headers, and a
one-day cache on the photos.

First time:

1. Push this repo to GitHub. It can stay private; Render serves private repos on the free tier.
2. In Render, choose **New > Blueprint**, connect the GitHub account, and pick this repo.
3. Render reads `render.yaml` and deploys. The site lands on a `*.onrender.com` URL.

After that every push to `main` redeploys on its own. Pull requests get their own preview URL.

To put it on a custom domain, add the domain under the service's **Settings > Custom Domains** and point the
DNS record at the target Render gives you.

Nothing here is tied to Render. The site is plain files, so Netlify, Vercel, GitHub Pages, or any static host
works the same way.
