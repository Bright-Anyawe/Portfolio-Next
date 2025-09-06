module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'next/typescript'],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/no-unescaped-entities': 'off',
    'import/no-extraneous-dependencies': 'error',
    'no-console': 'warn',
  },
  settings: {
    next: {
      rootDir: ['./'],
    },
  },
};
