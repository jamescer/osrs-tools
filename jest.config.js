module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  modulePaths: ['<rootDir>'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // Floor set a few points below the current baseline (~95/81/70/95 as of
  // 2026-07) so the build fails on real regressions without being brittle
  // against minor day-to-day fluctuation. Raise these as coverage improves.
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 75,
      functions: 65,
      lines: 90,
    },
  },
};
