module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'vue'
  ],
  verbose: true,
  testMatch: ['**/__test__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest'
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules",
    "<rootDir/tslib",
    "<rootDir/lib"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  mapCoverage: true
}