module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
