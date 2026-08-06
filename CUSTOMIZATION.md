# Customization Guide

## Step 1: Fork and Clone
Fork this repository and clone it to your local machine.
`git clone https://github.com/YOUR-USERNAME/developer-portfolio-template.git`

## Step 2: Edit Data
All text, links, and projects on this site are driven by one file: `src/config/data.ts`.
Open this file and replace the placeholder data with your own:
- Update your name, title, and bio.
- Add your social links (GitHub, LinkedIn, etc.).
- Update your skills arrays.
- Add your projects with images, descriptions, and links.
- Update your experience and education history.

## Step 3: Replace Images
- For projects, you can use external image URLs or place images in the `public` or `src/assets` folder and reference them in `data.ts`.
- Replace `public/vite.svg` or add your own favicon in `index.html`.

## Step 4: Deployment
This project is built with Vite and React. It can be easily deployed to services like Vercel, Netlify, or GitHub Pages.

**To Vercel/Netlify:**
1. Connect your GitHub repository.
2. Build command: `npm run build`
3. Output directory: `dist`

Enjoy your new premium portfolio!
