# georgewilson23.github.io

Personal portfolio site built with Astro + Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build
```

## Project Structure

```
src/
  content/         # Markdown content (blog posts, projects, about bio)
  components/      # Astro components
  data/            # Editable JSON data files
    photos.json    # Photo library
    resume.json    # Resume / experience data
  layouts/         # Page layouts
  pages/           # Route pages
public/
  assets/
    photography/   # Photo image files
    pdf/           # PDFs (resume, thesis, etc.)
```

## Managing Photos

All photo data lives in `src/data/photos.json`. Each entry looks like:

```json
{
  "src": "/assets/photography/your-photo.jpg",
  "alt": "Description for accessibility",
  "location": "Place, Country",
  "tags": ["Tag1", "Tag2"],
  "date": "Jan 2020",
  "hidden": false
}
```

### Adding a new photo

1. Drop the image file into `public/assets/photography/`
2. Add a new entry to `src/data/photos.json`

### Fields

| Field      | Required | Description                                      |
|------------|----------|--------------------------------------------------|
| `src`      | Yes      | Path to image (relative to `public/`)            |
| `alt`      | Yes      | Alt text for accessibility                       |
| `location` | No       | Where the photo was taken                        |
| `tags`     | No       | Array of tags — used for pill-button filtering   |
| `date`     | No       | When the photo was taken (free text, e.g. "Dec 2018") |
| `hidden`   | No       | Set to `true` to keep in the library but hide from the site |

### Hiding photos

Set `"hidden": true` on any entry to exclude it from the site without deleting it. This lets you keep your full library in the JSON and toggle visibility as needed. Omitting the field or setting it to `false` means the photo is shown.

### Tags

Tags power the filter pills on the photos page. Add any string to the `tags` array — the pill buttons are generated automatically from whatever tags exist across all visible photos.

## Managing Resume

Edit `src/data/resume.json` to update experience, skills, education, and certifications. No HTML needed.

## Managing About Bio

Edit `src/content/about/index.md` in plain markdown.

## Deployment

The site deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`).

**How it works:**
1. Push changes to a feature branch
2. Open a PR to `main`
3. Merge the PR
4. GitHub Actions builds the site and deploys to GitHub Pages

**Manual deploy:** You can also trigger a deploy from the Actions tab using "Run workflow" (workflow_dispatch).

**Preview locally before deploying:**
```bash
npm run build && npm run preview
```
