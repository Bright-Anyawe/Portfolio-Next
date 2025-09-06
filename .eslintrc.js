module.exports = {
  root: true,
  extends: ['next/core-web-vitals'],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
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
