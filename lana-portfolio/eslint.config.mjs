import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable all rules
      "@next/next/no-html-link-for-pages": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off",
      "jsx-a11y/alt-text": "off",
      "import/no-anonymous-default-export": "off",
      // This effectively disables all rules
      "@typescript-eslint/ban-ts-comment": "off"
    },
    // Add this to ignore all files
    ignorePatterns: ["**/*"]
  }
];

export default eslintConfig;
