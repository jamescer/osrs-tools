// jest.config.ts

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	// Indicates the root directory of your project
	rootDir: '.',

	// The test environment that will be used for testing
	testEnvironment: 'node',

	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',

	// An array of file extensions your modules use
	moduleFileExtensions: ['js', 'ts'],

	// A list of paths to directories that Jest should use to search for files in
	roots: ['<rootDir>/test'],

	// A map from regular expressions to paths to transformers
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},

	// An array of glob patterns indicating a set of files for which coverage information should be collected
	collectCoverageFrom: ['<rootDir>/src/**/*.ts', '<rootDir>/ts/src/**/*.ts', ],

	// The test runner that will be used to execute tests
	testRunner: 'jest-circus/runner',

	// A list of paths to modules that run some code to configure or set up the testing framework before each test
	setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],

	// A list of paths to modules that run some code to configure or set up the testing framework before each test suite
	setupFiles: ['dotenv/config'],

	// A list of paths to modules that Jest should automatically mock during the test process
	automock: false,

	// Indicates whether each individual test should be reported during the run
	verbose: true,
};

export default config;