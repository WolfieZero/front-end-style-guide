# @wolfiezero/eslint-config

Sharable config for [ESlint][eslint]

## Installation

Install this config using NPM.

```
npm install -D @wolfiezero/eslint-config
```

Then in the .eslintrc.js file (or what ever you may call it)

```js
module.exports = {
  root: true,
  env: {
    node: true,
    amd: true,
  },
  extends: ["@wolfiezero/eslint-config/javascript", "@wolfiezero/eslint-config/javascript/prettier"],
};
```

Changing the values as you need to...

## Extending

Options for setups are as follows. Note that `prettier` configs should always be
the last item to include (if you want it).

### JavaScript

```
@wolfiezero/eslint-config/javascript
@wolfiezero/eslint-config/javascript/prettier
```

### TypeScript

```
@wolfiezero/eslint-config/typescript
@wolfiezero/eslint-config/typescript/react
@wolfiezero/eslint-config/typescript/prettier
```

## VSCode User?

Make sure you have [ESLint extention][eslintvscode] installed and add the
following into the project's settings file (`/.vscode/settings.json`) (deleting
as appropriate).

```json
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.format.enable": false,
  "editor.formatOnSave": true
}
```

[eslint]: https://eslint.org/
[eslintptions]: https://eslint.org/docs/user-guide/configuring/
[eslintvscode]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
