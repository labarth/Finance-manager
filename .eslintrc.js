module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
    "import/extensions": ["error", "never", { "packages": "always" }],
    "import/no-unresolved": "off",
    "object-curly-newline": [0, {
      "ObjectExpression": "always",
    }],
    "no-unused-expressions": [2, { allowTernary: true }],
  },
  "env": {
    "browser": true,
    "es6": true,
  }
};