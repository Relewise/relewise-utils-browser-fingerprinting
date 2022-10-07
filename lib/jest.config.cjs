/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.ts'],
    moduleDirectories: ['node_modules'],
    setupFilesAfterEnv: ['./tests/setup-jest.js'],
    transform: {
        '^.+\\.[tj]s$': 'ts-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(@relewise)/)',
        '../lib/dist/cjs/relewise-client.js',
    ],
    globals: {
        'ts-jest': {
            tsconfig: {
                allowJs: true,
            },
        },
    },
};