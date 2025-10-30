# Architecture Overview

- Backend: Spring Boot (Web, Security, JPA, MySQL)
- Frontend: Angular SPA (proxy to /api)
- Auth: JWT (planned)
- Modules (planned): Payments (Stripe), E-Commerce (catalog/orders), Dispatch (jobs)

## Request Flow

Angular -> /api/\* (proxy) -> Spring Boot -> DB (MySQL)
