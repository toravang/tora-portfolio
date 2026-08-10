# Tora Portfolio

Personal portfolio website for Tora Nordhagen Vang, a Frontend and Mobile
Development student at Kristiania University College.

The site presents my background, technical skills, education, volunteering
experience, projects, and contact information in a responsive single-page
application.

## Features

- Responsive layout for desktop and mobile devices
- Mobile navigation with an overlay hamburger menu
- About, skills, education, and volunteering sections
- Contact page with links to LinkedIn, GitHub, and email
- Client-side routing between pages

## Tech stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 7
- React Icons
- ESLint

## Getting started

### Prerequisites

- Node.js `20.19+` or `22.12+`
- npm

### Installation

```bash
git clone https://github.com/toravang/tora-portfolio.git
cd tora-portfolio
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, normally
`http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Type-checks and creates a production build |
| `npm run lint` | Checks the project with ESLint |
| `npm run preview` | Previews the production build locally |

## Routes

| Route | Page |
| --- | --- |
| `/` | Home, about, skills, and education |
| `/prosjekter` | Portfolio projects |
| `/kontakt` | Contact information |

## Project structure

```text
src/
├── components/   Reusable page sections and navigation
├── pages/        Route-level page components
├── App.tsx       Application routes and shared layout
├── index.css     Global styles and Tailwind CSS import
└── main.tsx      Application entry point
```

## Current status

The home page, responsive navigation, and contact page are implemented. The
portfolio page is still under development. Because `Projects.tsx` does not yet
return page content, `npm run build` currently fails until that component is
implemented.

## Contact

- [LinkedIn](https://www.linkedin.com/in/tora-nordhagen-vang)
- [GitHub](https://github.com/toravang)
- [Email](mailto:toranvang@gmail.com)
