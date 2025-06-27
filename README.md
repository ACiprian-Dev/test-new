# 🛠️ AnvelopePlus.ro – Project README

## Overview

AnvelopePlus.ro is a high-performance e-commerce platform for tyres and rims, built with a modular stack focused on SEO, scalability, and fast filtering. The project is a full rebuild using Next.js, NestJS, PostgreSQL, Meilisearch, Strapi, and Docker.

## Tech Stack

| Layer       | Tech                    | Notes                                |
| ----------- | ----------------------- | ------------------------------------ |
| Frontend    | Next.js (Vercel-hosted) | React-based, ISR/SSG for SEO         |
| Backend API | NestJS                  | Modular, secure, scalable API        |
| Database    | PostgreSQL              | Relational structure, scalable       |
| Search      | Meilisearch             | Super-fast full-text filtering       |
| CMS         | Strapi                  | Admin UI for content and SEO control |
| Hosting     | Vercel + Hetzner        | CDN frontend + self-hosted backend   |
| Container   | Docker Compose          | Local dev and deployment ready       |

## Folder Structure

```
├── backend/          # NestJS API (products, orders, auth, etc.)
├── frontend/         # Next.js site
├── cms/              # Strapi CMS (collections, content)
├── docker-compose.yml
├── nginx/            # Optional Nginx reverse proxy config
├── .env.example      # Environment template
```

## Setup Instructions

1. Clone repo and set up env:

   ```bash
   cp .env.example .env
   docker compose up --build
   # optional: seed sample data
   cd backend && npm run seed && cd ..
   ```

2. Access:

   * Backend API: `http://localhost:3000`
   * Frontend (Vercel separately): `https://anvelopeplus.vercel.app`
   * CMS: `http://localhost:1337/admin`
   * Meilisearch: `http://localhost:7700`

3. Run frontend locally:

   ```bash
   cd frontend
   npm install && npm run dev
   ```

## Features

* ✅ SEO-optimized category + product pages
* ✅ Dynamic filters via Meilisearch
* ✅ Cart & order placement
* ✅ CMS-driven blog and content
* ✅ JWT auth and protected endpoints
* ✅ Sitemap + structured data
* ✅ Ready for Netopia/TBI integration
* 🆕 REST API (`/products`, `/orders`, `/users`) with TypeORM
* 🆕 Dynamic Next.js routes for filters and product pages

## Environments

* `development` – Local with Docker
* `production` – Vercel (frontend) + Hetzner (backend)

## Scripts

* `generate-sitemap.js` – Outputs sitemap from routes
* `sync-meili.js` – Indexes product data in Meilisearch
* `scheduler.js` – Cron stock updates (optional)

## License

MIT (or specify proprietary/closed if client-specific)

## Contact

Built by \[your-name or agency] — questions or issues: `dev@anvelopeplus.ro`

---

Feel free to extend this README for contributors, CI/CD instructions, or deployment playbooks.

