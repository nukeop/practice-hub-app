module.exports = {
    extends: [
        "../../.eslintrc.js",
        "plugin:react-hooks/recommended"
    ],
    plugins: [
        "react-hooks"
    ],
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    }
};