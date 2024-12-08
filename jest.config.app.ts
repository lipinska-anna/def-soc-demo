export default {
  displayName: 'def-soc-demo',
  preset: './jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/core/test-setup.ts'],
  coverageDirectory: './coverage/def-soc-demo',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  testMatch: [
    '<rootDir>/core/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/core/**/*(*.)@(spec|test).[jt]s?(x)',
  ],
};
