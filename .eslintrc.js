module.exports = {
  "parser": "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended","plugin:react/recommended", "standard", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  ignorePatterns: ["node_modules/"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "es5",
        semi: false,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: true
      }
    ],
    "no-unused-vars": 0,
    "react/prop-types": 0,
  }
};
