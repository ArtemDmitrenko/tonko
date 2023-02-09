module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extend", "mixin", "include"],
      },
    ],
    "scss/at-extend-no-missing-placeholder": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-empty-line-before": "never",
  },
};
