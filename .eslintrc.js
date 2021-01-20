'use strict';

module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true,
  },
  extends: [
    '@strv/javascript/environments/react/v16',
    '@strv/javascript/environments/react/accessibility',
    '@strv/javascript/coding-styles/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.d.ts'],
      },
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'import/no-self-import': 0,
    'import/no-cycle': 0,
    'import/no-useless-path-segments': 0,
    'import/group-exports': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-warning-comments': [
      0,
      {terms: ['todo', 'fixme', 'any other term'], location: 'anywhere'},
    ],
  },
};
