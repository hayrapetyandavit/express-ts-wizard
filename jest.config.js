export default {
  transform: {
    "^.+\\.js$": "babel-jest", // Use Babel to transform JavaScript files
  },
  testEnvironment: "node", // Set the test environment to Node.js
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Handle ESM imports without file extensions
  },
  transformIgnorePatterns: [
    "/node_modules/(?!execa)", // Allow Jest to transform the 'execa' module
  ],
  testTimeout: 60000 
};
