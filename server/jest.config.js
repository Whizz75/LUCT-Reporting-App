/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',        // Use Node.js test environment
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {},                  // No Babel needed unless you use ES modules
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
  ],
};
