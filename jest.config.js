module.exports = {
  preset: 'jest-expo',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testPathIgnorePatterns: ['/e2e/'],
};
