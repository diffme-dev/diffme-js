module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "prettier",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "@typescript-eslint/ban-ts-comment": "warn",
    },
};
