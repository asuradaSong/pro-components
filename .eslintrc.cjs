/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
const prettierConfig = require('./..prettierrc.cjs');
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
};
