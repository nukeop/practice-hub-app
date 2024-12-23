import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.json' }],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  globalSetup: './jest.setup.ts',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  roots: [path.join(__dirname, 'packages'), path.join(__dirname, 'apps')],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
