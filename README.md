# Aakif Nadeem — Portfolio v2

A data-driven, animated portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static site is exported to `out/`.

## Content updates

- Projects: `data/projects.ts`
- Experience: `data/experience.ts`
- Skills: `data/skills.ts`
- Resume: `public/AakifResume.pdf`
- Project images: `public/projects/`
- Favicon: `public/icon.svg`

## Add the profile image

Add your photo as:

```text
public/profile/aakif.jpg
```

Then replace the placeholder inside `components/About.tsx` with an image element.

## Add the FadFed showcase

Place the main image in `public/projects/fadfed.png`, then set this in `data/projects.ts`:

```ts
image: "/projects/fadfed.png"
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` deploys whenever changes are merged into `main`.
In repository settings, select **GitHub Actions** as the Pages source.
