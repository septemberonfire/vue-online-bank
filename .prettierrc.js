export default {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: true,
  semi: false,
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
