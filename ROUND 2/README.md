# Full Stack Authentication App

## Project Overview

A complete Registration Module, Login Module, and Dashboard built using modern web development best practices. This is a production-ready application focusing on clean code, secure authentication, and a beautiful user interface.

## Features

* User Registration
* User Login
* Protected Dashboard
* JWT Authentication
* Prisma + PostgreSQL

## Installation

```bash
git clone <repo-url>
cd project

npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables (use `.env.example` as a template):

```env
DATABASE_URL=
JWT_SECRET=
```

## Database Setup

```bash
npx prisma generate
npx prisma migrate dev
```

## Run Project

```bash
npm run dev
```

## Folder Structure

* `src/app/` - Next.js App Router containing pages and API endpoints.
* `src/components/` - Reusable UI components.
* `src/lib/` - Utility functions (Prisma, Auth, Validations).
* `prisma/` - Prisma ORM schema and migrations.
* `src/middleware.ts` - Edge middleware for route protection.

## API Endpoints

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| POST   | /api/register | Register user    |
| POST   | /api/login    | Login user       |
| GET    | /api/user     | Get current user |
| POST   | /api/logout   | Logout user      |

## Screenshots

### Registration Page

<img width="1496" height="810" alt="image" src="https://github.com/user-attachments/assets/3265d882-5e47-4c85-85a3-ea2b0743f1ff" />


### Login Page

<img width="940" height="791" alt="image" src="https://github.com/user-attachments/assets/644cedb6-a8d2-4841-a762-07ee586fa4d0" />


### Dashboard

<img width="1860" height="830" alt="image" src="https://github.com/user-attachments/assets/95503255-7049-4f58-a2fc-292d6540a70b" />


## Future Improvements

* Forgot Password
* Email Verification
* Role Based Access Control
* Profile Management
