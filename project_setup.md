# Project Setup Documentation - [React Front End OSINT]

This document tracks the initial configuration and infrastructure established for this React Native application's development environment.

## Completed Steps

### 1. Initial Environment & Framework Selection
- **Framework:** React Native (using `npx react-native` CLI).
- **Initialization Commands Used:**

  i) **npm install -g react-native-cli**
  ii) **npx react-native init MyReactNativeApp**
  
  Project bootstrapped with standard folder structure including Android/iOS native modules, node_modules configuration, and basic boilerplate files.

### 2. Core Folder Structure Organization
The project follows a modular architecture to ensure scalability:
    *   **src/** - Main application source code directory.
    *   **components/** - Reusable UI components (atomic design).
    *   **screens/pages/** - Full-screen views and feature modules.
    *   **navigation/** - Routing logic using React Navigation or similar navigation libraries.
    *   **assets/** - Static resources including images, icons, and fonts.
    *   **theme/** - Global styling constants (colors, spacing, typography).
    *   **utils/helpers/** - Pure utility functions for data manipulation and formatting.
    *   **services/api/** - Backend integration layer specifically designed to interface with the FastAPI backend via Axios or Fetch API.

### 3. State Management Implementation
- **Framework:** Redux with Redux Toolkit
- **Initialization Commands Used:**
  i) **npm install @reduxjs/toolkit react-redux**
  ii) **npm install redux-thunk**
  iii) **npm install redux-logger** (optional, for logging)
- **Configuration:**
  - Created `configureStore.js` in the `src/` directory
  - Configured the store with reducers and middleware
  - Wrapped the root component with the `Provider` from `react-redux` to make the store available throughout the application

### 4. Navigation Logic Configuration
- **Framework:** React Navigation
- **Initialization Commands Used:**
  i) **npm install @react-navigation/native**
  ii) **npm install @react-navigation/stack**
  iii) **npm install react-native-screens react-native-safe-area-context**
- **Configuration:**
  - Created `navigation.js` in the `src/` directory
  - Configured the navigation structure using `NavigationContainer` and `Stack.Navigator`
  - Defined screen components (`HomeScreen.js` and `DetailsScreen.js`) in the `src/screens` directory
  - Integrated navigation into the main application component (`App.js`)
  - Addressed vulnerabilities using `npm audit fix` (optional)

## Upcoming Tasks
- [ ] Environment Variable Integration (`react-native-config`)
- [ ] Core Feature Development & UI Design