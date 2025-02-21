# The Yarn Bazaar Website

## Overview
This project is a Next.js-based website built using TypeScript, Tailwind CSS, and modular components. It follows a structured component-based approach with reusable UI elements, API integration, and server-side rendering (SSR).

## Tech Stack
- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Package Manager:** npm/yarn
- **Build & Deployment:** Docker, GitLab CI/CD
- **Database & API:** Custom Lambda functions

## Installation & Setup
### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn

### Installation
```sh
git clone <repository-url>
cd project-folder
npm install
```

### Running the Development Server
```sh
npm run dev
```

## Folder Structure
### Root Files & Configurations
- `.env` – Environment variables.
- `.gitignore` – Files to ignore in version control.
- `.gitlab-ci.yml` – GitLab CI/CD configuration.
- `Dockerfile` – Containerization setup for deployment.
- `next.config.ts` – Next.js configuration.
- `package.json` – Project dependencies and scripts.
- `tailwind.config.ts` – Tailwind CSS configuration.
- `tsconfig.json` – TypeScript configuration.

### Public Assets
- `public/` – Static assets like images, icons, and fonts.

### Source Code (`src/`)
#### App Structure (`src/app/`)
- `layout.tsx` – Root layout for the entire app.
- `page.tsx` – Main page rendering logic.

#### Pages (`src/app/[id]/`, `about-us/`, `contact-us/`)
Each directory represents a Next.js route.
- `[id]/page.tsx` – Dynamic route for handling pages with unique IDs.
- `about-us/page.tsx` – About Us page.
- `contact-us/page.tsx` – Contact Us page.

#### Components (`src/components/`)
Reusable UI and functional components:
- **Bandhu Module** (`bandhu/Bandhu.tsx`) – Bandhu section.
- **FAQ Module** (`FAQ/FaqSection.tsx`) – FAQ section.
- **Hero Section** (`hero/Hero.tsx`, `hero/Subhero.tsx`) – Hero and subhero components.
- **Product Section** (`product/Product.tsx`, `product/ProductSlideCard.tsx`) – Product-related components.
- **Progress Section** (`progress/Progress.tsx`, `progress/Progresscard.tsx`) – Progress tracking UI.

## API & Data Handling
- `lib/api.ts` – Handles API requests.
- `lambda/db.ts` – Database interactions.

## Styling
- `styles/globals.css` – Global styles.
- `postcss.config.mjs` – PostCSS configuration.

## Deployment
### Using Docker
```sh
docker build -t project-name .
docker run -p 3000:3000 project-name
```

### CI/CD (GitLab)
- The `.gitlab-ci.yml` file contains deployment scripts for GitLab pipelines.

## Contributing
1. Clone the repository and create a new branch for your changes.
```sh
git clone <repository-url>
cd project-folder
git checkout -b feature/branch
```
2. Make your changes and commit them with a meaningful message.
```sh
git commit -m "Add new feature"
```
3. Push the branch to GitLab.
```sh
git push origin feature/branch
```
4. Open a Merge Request (MR) on GitLab.
5. Request a review and make any necessary changes based on feedback.
6. Once approved, merge the branch into the main branch.

