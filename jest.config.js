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
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(svg|jpg|png)$': '<rootDir>/test/mocks/empty-module.js'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  mapCoverage: true,
}