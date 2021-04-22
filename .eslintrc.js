module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended", // 必ず最後尾
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // ES Lint の rules
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-deprecated-slot-attribute": "off",
    quotes: ["error", "double"], // 文字列の指定はダブルクォート
    "no-var": "error", // var の使用禁止
    eqeqeq: ["error", "always"], // "=="（等価演算子） の使用禁止、"==="厳密等価演算子を使用

    // prettier の rules
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        trailingComma: "es5",
        htmlWhitespaceSensitivity: "ignore",
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
