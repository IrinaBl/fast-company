module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: [2, "always"],
    // requireMultiLineTernary: [2],
    // multilineTernary: ["error", "never"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" }
    ]
  }
};
