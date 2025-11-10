# Testing Strategy

## Goals
- Unit tests for utilities, reducers, and components
- Integration tests for API endpoints and DB interactions
- End-to-end tests for critical user flows
- Maintain >= 70% unit coverage
- Examples of debugging: global error handler, React ErrorBoundary, structured logging

## How to run
- Server tests:
  ```bash
  cd server
  npm ci
  npm test
  ```
- Client tests:
  ```bash
  cd client
  npm ci
  npm test
  ```
- E2E (Cypress):
  ```bash
  npx cypress open
  ```

## What to include in submission
- tests/unit/, tests/integration/, cypress/
- coverage reports and screenshots
- docs/testing-strategy.md
- CI workflow that runs tests
