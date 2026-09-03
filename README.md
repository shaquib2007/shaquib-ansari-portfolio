# Shaquib Ansari Portfolio

A responsive one-page AI/ML portfolio for Mohd Shaquib Ansari, built as a plain static HTML, CSS, and JavaScript site. It includes the supplied portrait, verified project presentation, downloadable CV, certificates, achievements, and responsive navigation.

## Deploy

This folder is deployable as-is on any static hosting provider. Upload the complete `photo-preview/` folder, keeping the relative paths intact. The entry point is `index.html`.

For local preview, run:

```bash
python3 -m http.server 4175
```

Then open `http://localhost:4175/` in a browser. No build step or server-side environment variables are required.

## Included files

| File or directory | Purpose |
| --- | --- |
| `index.html` | Portfolio structure, content, and navigation |
| `styles.css` | Responsive visual system and spacing polish |
| `script.js` | Mobile navigation, active section state, project filters, private-project modal, and reveal motion |
| `photo.png` | Supplied portrait used in the hero section |
| `outputs/shaquib-ansari-cv.pdf` | One-page downloadable CV with the contact-request line removed |
| `outputs/certificates/` | Downloadable certificate PDFs |
| `validate_portfolio.py` | Structural validation script |

## Validation

Run the following checks from this directory:

```bash
node --check script.js
python3 validate_portfolio.py
```

The portfolio contains no server-side code and does not expose private repository URLs to visitors.
