# Tora Portfolio

[![CI](https://github.com/toravang/tora-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/toravang/tora-portfolio/actions/workflows/ci.yml)

My personal portfolio website, designed and built to present my background,
technical skills, education, volunteer experience, projects, and published
writing.

**[View the live website](https://toranvang.no)**

## Highlights

- Responsive single-page application for desktop and mobile
- Accessible navigation with keyboard support and reduced-motion handling
- Route-specific titles, descriptions, canonical URLs, and Open Graph metadata
- Project and writing sections with external links
- Static-hosting support for client-side routes
- Automated lint and production-build checks with GitHub Actions

## Tech stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 7
- React Icons

## Technical choices

The site uses small, focused React components for navigation and page sections.
Repeated content such as skills and contact links is stored as data and rendered
consistently. React Router handles navigation, while the hosting configuration
ensures that direct visits to nested routes still load the application.

Metadata is updated for each route to give shared links and search engines more
useful page information. The interface also respects the user's reduced-motion
preference.

## Run locally

### Prerequisites

- Node.js `20.19+` or `22.12+`
- npm

```bash
git clone https://github.com/toravang/tora-portfolio.git
cd tora-portfolio
npm install
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

## Quality checks

```bash
npm run lint
npm run build
```

The same checks run automatically for pushes and pull requests through GitHub
Actions.

## Routes

| Route | Content |
| --- | --- |
| `/` | Introduction, skills, education, and volunteer experience |
| `/prosjekter` | Projects and published writing |
| `/kontakt` | Contact information |

## Project structure

```text
src/
├── components/   Reusable page sections and navigation
├── pages/        Route-level page components
├── App.tsx       Application routes and metadata
├── index.css     Global styles and Tailwind CSS import
└── main.tsx      Application entry point
```

## Contact

- [Portfolio](https://toranvang.no)
- [LinkedIn](https://www.linkedin.com/in/tora-nordhagen-vang)
- [Email](mailto:toranvang@gmail.com)
