# Intencje APP Quickstart

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

