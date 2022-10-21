/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  roots: ["./src"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }

};