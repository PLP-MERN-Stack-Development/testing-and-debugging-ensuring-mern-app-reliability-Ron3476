module.exports = {
  testEnvironment: 'node',
  verbose: true,
  transform: {},
  moduleFileExtensions: ['js', 'json', 'jsx'],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/index.js"
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
