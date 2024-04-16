const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Assurez-vous que ce chemin est correct et pointe vers la racine de votre projet Next.js
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],  // Ajouté pour résoudre les modules correctement
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'  // Mapper pour ignorer les importations de styles dans les tests
  }
};

module.exports = createJestConfig(customJestConfig);
