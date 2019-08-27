module.exports = {
  setupFiles: ['<rootDir>/__test__/setup.js'],
  coverageDirectory: 'coverage',
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  moduleNameMapper: {
    '.+\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/__test__/__mock__/svgrMock.js',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^@config(.*)$': '<rootDir>/src/config$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@actions(.*)$': '<rootDir>/src/actions$1',
    '^@reducers(.*)$': '<rootDir>/src/reducers$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '@/(.*)$': '<rootDir>/src$1'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!<rootDir>/__test__/**/*.(spec|test).{js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist/',
    '<rootDir>/src/utils',
    '<rootDir>/src/components/icons',
    '<rootDir>/src/index.js',
    '<rootDir>/src/store/index.js',
    '<rootDir>/src/config/'
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest'
  }
};
