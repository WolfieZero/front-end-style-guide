module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["./index", "./prettier"],
  rules: {
    'unicorn/prefer-module': 'off' // Package uses CommonJS
  }
};
