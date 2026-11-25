# Game Store API

## Overview

A REST API designed to simulate a video game store catalog and provide a controlled environment for functional testing, performance testing, and observability.

This project is part of a QA Engineering portfolio focused on building realistic testing environments and applying software quality and performance engineering practices.

## Tech Stack

- Node.js
- TypeScript
- Fastify
- npm
- Git & GitHub

## Project Architecture

```text
game-store-api/
├── src/
│   ├── controllers/
│   │   └── game.controller.ts
│   ├── models/
│   │   └── game.model.ts
│   ├── routes/
│   │   └── game.routes.ts
│   ├── services/
│   │   └── game.service.ts
│   └── server.ts
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

The application follows a layered architecture that separates routing, controllers, business logic, and data models.

## API Endpoints

| Method | Endpoint | Description | Status |
|---|---|---|---|
| GET | /health | Application health check | Implemented |
| GET | /games | Retrieve the game catalog | Implemented |

## Game Data Model

| Field | Description |
|---|---|
| id | Unique game identifier |
| title | Game title |
| genre | Game genre |
| price | Game price |
| releaseYear | Release year |
| developer | Game developer |
| inStock | Availability status |

## Getting Started

### Install dependencies

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

### Validate TypeScript

```bash
npx tsc --noEmit
```

### Build the application

```bash
npm run build
```

### Start the compiled application

```bash
npm start
```

The API runs locally on port 3000.

## Performance Testing

This API serves as the target application for a dedicated performance testing framework developed using