/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: ['warn', 4],
        quotes: ['warn', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        'quote-props': ['warn', 'as-needed'],
        curly: ['error', 'all'],
        'keyword-spacing': ['warn', { 
            before: true,
            after: true
        }],
        'object-curly-spacing': ['warn', 'always'],
        'arrow-spacing': 'warn',
        'key-spacing': ['warn', { afterColon: true }],
        'comma-spacing': ['warn', { before: false, after: true }],
        'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        'react/prop-types': ['error', { ignore: ['navigation'] }]
    }
};
