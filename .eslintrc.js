module.exports = {
  root: true,
  extends: ['next/core-web-vitals'],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-extraneous-dependencies': 'error',
    'no-console': 'warn',
  },
  settings: {
    next: {
      rootDir: ['./'],
    },
  },
};