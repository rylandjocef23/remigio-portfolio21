# Ryland Jocef Remigio | Portfolio Website

React + Vite + Tailwind CSS v4 + React Router.

## Run it

```
npm install
npm run dev      # local site
npm run build    # production build in /dist
```

## Update your content

- `src/data/site.js`: email, location, **GitHub link**, optional form endpoint
- `src/data/projects.js`: project cards (title, text, screenshot, tags, links)
- `src/data/skills.js`: skills on the About page
- `public/images/`: screenshots and your photo

## Deploy (Vercel)

Push to `main`. `vercel.json` sends every route to `index.html`, so refreshing `/about`, `/projects` or `/contact` works.
