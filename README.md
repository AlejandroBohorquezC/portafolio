# Alejandro Bohorquez — Developer Portfolio

Portfolio website built with Astro, focused on performance, SEO, accessibility, and a clean developer-first experience.

This project serves as a central place to showcase my professional experience, technical skills, selected projects, and frontend development approach.

---

## Overview

The portfolio was designed with the following goals in mind:

- Fast static rendering
- Strong SEO foundations
- Clean and maintainable architecture
- Responsive and accessible UI
- Lightweight client-side JavaScript
- Easy deployment and scalability

The project uses Astro as the main framework to minimize unnecessary JavaScript and improve loading performance while maintaining a modern user experience.

---

## Tech Stack

| Category        | Technology          |
| --------------- | ------------------- |
| Framework       | Astro 4             |
| Styling         | CSS + Design Tokens |
| Typography      | Syne + Space Mono   |
| Forms           | Formspree           |
| Deployment      | Vercel / Netlify    |
| Package Manager | npm                 |

---

## Features

- Responsive layout
- Semantic HTML structure
- Open Graph and Twitter metadata
- JSON-LD structured data
- Sitemap generation
- Robots.txt configuration
- Downloadable CV
- Contact form integration
- Component-based architecture
- Optimized static rendering with Astro

---

## SEO Implementation

The project includes a complete SEO setup focused on discoverability and social sharing.

### Included

- Meta title and description
- Open Graph tags
- Twitter Cards
- Canonical URLs
- Structured Data (Schema.org Person)
- Sitemap generation
- Semantic markup
- Accessible navigation
- Optimized heading hierarchy

---

## Performance Notes

The project is currently optimized primarily for SEO, accessibility, and maintainability.

Although Astro significantly reduces unnecessary JavaScript compared to traditional SPA frameworks, there are still ongoing improvements planned regarding:

- Lighthouse Performance optimization
- Image optimization strategy
- Font loading optimization
- Asset compression
- CLS/LCP improvements

Performance optimization is considered an active iteration process rather than a finalized state.

---

## Project Structure

```bash
portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── og-image.png
│   └── cv-alejandro-bohorquez.pdf
│
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
│
├── astro.config.mjs
└── package.json
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

The application will run on:

```bash
http://localhost:4321
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Environment & Configuration

### Formspree

Create a Formspree form and replace the form ID inside:

```bash
src/components/Contact.astro
```

Example:

```js
const FORMSPREE_ID = "your_form_id";
```

---

### Site URL

Update the production domain inside:

```bash
astro.config.mjs
```

```js
site: "https://yourdomain.com";
```

---

### Open Graph Image

Add the social preview image inside:

```bash
public/og-image.png
```

Recommended size:

```bash
1200x630
```

---

## Deployment

### Vercel

The project is fully compatible with Vercel deployment.

```bash
npm install -g vercel
vercel
```

### Netlify

The project can also be deployed directly to Netlify with zero additional configuration.

---

## Future Improvements

Planned improvements for future iterations:

- Dark/light theme toggle
- Internationalization (i18n)
- Blog section
- Project filtering system
- Performance optimization pass
- CMS integration
- Motion and micro-interactions
- Automated analytics dashboard

---

## Author

**Alejandro Bohorquez**
Full Stack Developer

Focused on building scalable web applications using modern technologies such as NestJS, Next.js, AWS services, and AI integrations.

---

## License

This project is open for inspiration and learning purposes.

Please do not redistribute personal branding assets without permission.
