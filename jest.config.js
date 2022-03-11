module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    moduleNameMapper: {
        /* Handle CSS imports (with CSS modules)
        https://jestjs.io/docs/webpack#mocking-css-modules */
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

        /* Handle image imports
        https://jestjs.io/docs/webpack#handling-static-assets */
        '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$': '<rootDir>/__mocks__/image-mock.js',
        '^client(.*)$': '<rootDir>/src/client$1',
        '^pages(.*)$': '<rootDir>/src/pages$1',
        '^app(.*)$': '<rootDir>/src/client/app$1',
        '^utils(.*)$': '<rootDir>/src/client/utils$1',
        '^resources(.*)$': '<rootDir>/src/client/resources$1',
        '^hooks(.*)$': '<rootDir>/src/client/hooks$1',
        '^generated(.*)$': '<rootDir>/src/client/generated$1',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jsdom',
    transform: {
        /* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};
