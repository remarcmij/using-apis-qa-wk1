module.exports = {
  rules: {
    'prefer-const': 'error',
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
    ],
  },
};
