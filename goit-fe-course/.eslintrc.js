module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "google",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    indent: [
      "error",
      2,
      {
        ArrayExpression: "off",
        ObjectExpression: "off"
      }
    ],
    "no-mixed-spaces-and-tabs": ["error"],
    "linebreak-style": ["error", "windows"],
    "block-spacing": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false
        }
      }
    ]
  }
};
