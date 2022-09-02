module.exports = {
  testEnvironment: 'node',
  modulePaths: ['.'],
  moduleDirectories: ["node_modules", "api"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s"],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'ts'],
};
