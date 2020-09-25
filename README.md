# intencje.pl

> "Freely you have received; freely give" (Matthew 10:8)

Source code of intencje.pl website and mobile/desktop apps based on Angular, Firebase, and Capacitor.

## Tech stack

- **Observable based** - By the power of Angular and RxJS
- **Single code base** - For Web, PWA, Android, iOS, and desktop app (Mac / Linux / Windows)
- **BaaS** - Serverless Node.js Cloud Functions from Firebase
- **Realtime** - Synchronize data in realtime between all clients and backend
- **Offline Data** - Store data offline and sync it automatically with @angular/fire
- **App-shell SSR** - Generate some static HTML to boost [first load performance](https://developers.google.com/web/fundamentals/architecture/app-shell)
- **Push notifications** - For web, mobile and desktop
- **Service Worker** - With use of @angular/pwa
- **Material Design** - Design guidance and code from @angular/material
- **Cypress** - E2E tests

## Demo
### Staging
#### https://intencje-staging.web.app
### Production (PWA enabled)
#### https://intencje-production.web.app

# Documentation
### https://intencje.github.io/app/
# Quickstart

## Prerequisites

Firebase (free) account with empty web app.

### 1. Clone and install dependencies

```bash
git clone git@github.com:intencje/app.git
cd app
npm install
```

### 2. Edit the configuration file using your Firebase config data

```bash
nano src/environments/environment.ts
```
Don't forget to set up proper local URL of your app.

### 3. Set up Cloud Functions backend

```bash
cd functions
npm install
```
### 4. Run backend in Google Cloud

```bash
cd ../
firebase deploy --only functions
```

### 5. Run project locally

```bash
npm run start
```



