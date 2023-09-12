module.exports = {
  env: {
    es6: true,
  },
  plugins: ['unicorn'],
  extends: ['xo', 'plugin:unicorn/recommended'],
  rules: {
    indent: ['error', 2],
    'no-console': ['warn', { allow: ['info', 'warn', 'error', 'debug', 'table'] }],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true, // Allow `kabab-case` (not `kebab-Case` or `Kekbab-Case`)
          pascalCase: true, // Allow `PascalCase` (not `pascalCase`)
        },
      },
    ],
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          props: false,
          env: false,
        },
      },
    ],
  },
};
