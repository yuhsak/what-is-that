module.exports = {
  "roots": [
    "<rootDir>/tests"
  ],
  "testMatch": [
    "**/tests/**/*.+(ts|tsx|js|jsx)",
    "**/?(*.)+(spec|test).+(ts|tsx|js|jsx)"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "__.*?\.(ts|tsx|js|jsx)$"
  ],
  "collectCoverageFrom": [
    "index.ts"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.test.json"
    }
  }
}
