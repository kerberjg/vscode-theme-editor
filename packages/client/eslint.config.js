const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const reactHooks = require("eslint-plugin-react-hooks");

const {
    fixupPluginRules,
} = require("@eslint/compat");

const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    extends: compat.extends("plugin:react/recommended"),

    plugins: {
        "react-hooks": fixupPluginRules(reactHooks),
    },

    languageOptions: {
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",

            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    rules: {
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",

        "react-hooks/exhaustive-deps": ["warn", {
            additionalHooks: "useRecoilCallback",
        }],
    },

    settings: {
        react: {
            version: "detect",
        },
    },
}, globalIgnores([
    "**/build",
    "**/config",
    "**/scripts",
    "**/node_modules",
    "**/.eslintrc.js",
    "**/*.d.ts",
])]);
