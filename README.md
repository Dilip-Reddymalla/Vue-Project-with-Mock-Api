# Mock API Employee Manager

A modern Vue 3 CRUD web app that demonstrates how to build a complete frontend workflow using a mock REST API.

This project is designed as a practical learning app for API integration with Axios, route-based page structure with Vue Router, and responsive UI behavior with Bootstrap 5.

## Live Project Goal

The website helps you understand how a frontend application can:

- Create employee records with POST
- Read employee records with GET
- Update employee records with PUT
- Delete employee records with DELETE

All actions are connected to a MockAPI endpoint, so you can practice full CRUD without creating a backend server.

## Features

- Responsive navigation with a mobile hamburger menu
- Separate pages for each CRUD operation
- Reusable Vue components per operation
- Axios-based API calls with real request and response handling
- Instant UI refresh after update and delete actions
- Confirmation prompt before deleting a record
- Custom theme and card/table styling through centralized global CSS

## Tech Stack

- Vue 3
- Vue Router
- Axios
- Bootstrap 5
- bootstrap-vue-next
- Vue CLI

## API Used

Base endpoint:

https://69e7502a68208c1debe8a803.mockapi.io/api/employee

Employee model fields used in this project:

- id
- name
- salary
- designation
- department

## Application Flow

1. The app starts in src/main.js and mounts the Vue app.
2. Router is registered to handle page navigation.
3. Bootstrap and bootstrap-vue-next are initialized.
4. Global styles are loaded from src/assets/theme.css.
5. App.vue renders the navigation bar and route content panel.
6. Each view loads a dedicated component that performs one CRUD operation.

## Routes

- / -> Home overview
- /post -> Create employee record
- /get -> Fetch employee list
- /put -> Edit employee record
- /delete -> Remove employee record

## Project Structure

src/

- components/
  - NavBar.vue
  - PostComp.vue
  - GetComp.vue
  - PutComp.vue
  - DeleteComp.vue
- views/
  - HomeView.vue
  - PostVue.vue
  - GetData.vue
  - PutData.vue
  - DeleteData.vue
- router/
  - index.js
- assets/
  - theme.css
- App.vue
- main.js

## CRUD Implementation Summary

### Create (POST)

- Implemented in PostComp.vue
- Uses a form with v-model bindings
- Sends data with axios.post(...)
- Displays inserted employee response in a table

### Read (GET)

- Implemented in GetComp.vue
- Calls axios.get(...) to fetch all employees
- Loads data on mounted lifecycle hook
- Supports manual refresh button

### Update (PUT)

- Implemented in PutComp.vue
- Loads all records in table
- Edit button copies selected row into an editable form
- Sends updated object with axios.put(.../id)
- Refreshes list and resets form after success

### Delete (DELETE)

- Implemented in DeleteComp.vue
- Fetches and renders all employee records
- Uses confirm dialog before deletion
- Sends axios.delete(.../id)
- Refreshes list after successful deletion

## Setup and Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run serve
```

### 3. Build for production

```bash
npm run build
```

### 4. Lint project

```bash
npm run lint
```

## Deployment Notes

- Build output is generated in the dist folder.
- For static hosting platforms, serve the dist directory.
- If using history mode routes on a server, configure fallback to index.html.
- If style changes do not appear after deploy, clear browser/CDN cache.

## Why This Project Is Useful

This project is a strong beginner-to-intermediate reference for:

- Understanding CRUD lifecycle in frontend apps
- Organizing Vue apps with clear component and route separation
- Connecting UI state with remote API responses
- Building responsive layouts with Bootstrap in Vue

## Future Improvements

- Add form validation with user-friendly error messages
- Add loading and error states for all API requests
- Replace browser confirm with a styled modal
- Move API base URL to environment variables
- Add reusable API service layer
- Add unit tests and component tests

## Vue CLI Reference

For advanced Vue CLI options, see:

https://cli.vuejs.org/config/
