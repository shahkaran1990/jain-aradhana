// ESLint flat config for the Jain Aradhana static site.
//
// The site is buildless vanilla JS (IIFEs + "use strict"), so this config is
// deliberately lenient: it catches real bugs (undeclared/undefined variables,
// unused variables, unreachable code) without imposing style rules or fighting
// the intentional patterns in the code (e.g. empty catch blocks used to make
// localStorage access safe).
//
// Run locally with no install:  npx eslint@9 .

const browserGlobals = {
  // Standard browser environment
  window: "readonly",
  document: "readonly",
  navigator: "readonly",
  location: "readonly",
  localStorage: "readonly",
  console: "readonly",
  fetch: "readonly",
  setTimeout: "readonly",
  requestAnimationFrame: "readonly",
  matchMedia: "readonly",
  URL: "readonly",
  RegExp: "readonly",
  Promise: "readonly",
  Date: "readonly",
  Array: "readonly",
  Object: "readonly",
  JSON: "readonly",
  // App-specific globals shared across scripts via window.*
  CONTENT: "readonly",
  CATEGORIES: "readonly",
  Analytics: "writable",
  gtag: "writable",
  dataLayer: "writable",
  GA_MEASUREMENT_ID: "readonly",
  GA_PAGE_VIEW: "writable",
};

const serviceWorkerGlobals = {
  self: "readonly",
  caches: "readonly",
  clients: "readonly",
  fetch: "readonly",
  URL: "readonly",
  Promise: "readonly",
  Response: "readonly",
  Request: "readonly",
};

const sharedRules = {
  // Real-bug rules
  "no-undef": "error",
  // args:"none" ignores unused fn args; caughtErrors:"none" allows the
  // intentional `catch (e) {}` bindings used for safe localStorage access.
  "no-unused-vars": ["warn", { args: "none", caughtErrors: "none" }],
  "no-unreachable": "error",
  "no-dupe-keys": "error",
  "no-dupe-args": "error",
  "no-cond-assign": "error",
  "no-constant-condition": ["error", { checkLoops: false }],
  "use-isnan": "error",
  "valid-typeof": "error",
  // Empty catch blocks are used intentionally (safe localStorage access),
  // so allow them; still flag other empty blocks.
  "no-empty": ["error", { allowEmptyCatch: true }],
};

export default [
  {
    ignores: ["node_modules/**", "**/*.min.js"],
  },
  {
    // Browser-side scripts.
    files: ["assets/**/*.js", "data/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: browserGlobals,
    },
    rules: sharedRules,
  },
  {
    // Service worker runs in its own global scope.
    files: ["sw.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: serviceWorkerGlobals,
    },
    rules: sharedRules,
  },
];
