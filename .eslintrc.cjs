module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/react"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules", "build"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      "node": {
        "extensions": [".js",".jsx", ".ts", ".tsx"]
      },
    }
  },
  plugins: ["react-refresh", "react-hooks", "jsx-a11y", "import"],
  rules: {
    "semi": ["error", "always"],
    "space-before-function-paren": "off",
    "quotes": ["warn", "double", { allowTemplateLiterals: true }],
    // "no-unused-vars": "warn",
    "multiline-ternary": "off",
    "react-refresh/only-export-components": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-unresolved": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
};
