# HackCanada

HackCanada is the official website for the HackCanada hackathon, hosted by HackathonsCanada. Built with a combination of Astro, TypeScript, React, TailwindCSS + more!

## Getting Started

To get started with the HackCanada project, follow the instructions below.

### Prerequisites

Make sure you have Node.js installed. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.
Also make sure you have [pnpm](https://pnpm.io/) installed.

### Installation

```bash
pnpm install
```

### Running the Project

To start the development server, use the following command:

```bash
pnpm  dev
```

The project will run on `localhost:4321` by default.

### Building the Project

To build the project for production, run:

```bash
pnpm build
```

### Previewing the Build

To preview the build, run:

```bash
pnpm preview
```

### Formatting the Code

To format the codebase using Prettier, run:

```bash
pnpm format
```

## Project Structure

The following is an overview of the project's structure:

```plaintext
/
├── src
│   ├── layouts
│   │   ├── BaseLayout.astro    # Base layout with essential structure
│   │   └── MainLayout.astro    # Main layout for the landing page
│   ├── pages
│   │   └── index.astro         # Home page of the website
│   ├── styles
│   │   └── global.css          # Global styles for the website
│   ├── types
│   │   └── types.d.ts          # TypeScript type definitions
│   ├── config
│   │   ├── site.ts             # Site-wide configurations + SEO stuff
│   └── components
│       └── ui                  # shadcn-ui components for the UI
```

### Detailed Overview

- **`src/layouts`**: Contains layout files that define the overall structure of the pages.

  - `BaseLayout.astro`: A base layout providing fundamental html structure.
  - `MainLayout.astro`: The main layout used for the landing page.

- **`src/pages`**: Holds the Astro page components.

  - `index.astro`: The homepage component.

- **`src/styles`**: Includes global stylesheets.

  - `global.css`: Global styles applied throughout the website.

- **`src/types`**: TypeScript definitions for type safety.

  - `types.d.ts`: General type definitions used across the project.

- **`src/config`**: Configuration files for site-specific settings and data.

  - `site.ts`: Site-wide configuration settings, mostly for SEO.

- **`src/components/ui`**: Collection of UI components built using shadcn-ui.
  - Contains reusable UI components for the website.

## Scripts Overview

- **`dev`**: Start the development server.
- **`build`**: Check the code and build for production.
- **`preview`**: Preview the built project.
- **`format`**: Format the code using Prettier with the specified configuration in `.prettierrc.mjs`.

## Technologies Used

- **Astro**: World's fastest static site generator.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed JavaScript.
- **TailwindCSS**: Utility-first CSS framework.
- **Lucide**: Icon library.
- \*\*More to come.
