const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
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
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
        },

        parser: tsParser,
    },

    extends: compat.extends(
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/consistent-type-imports": "error",

        "@typescript-eslint/no-unused-vars": ["warn", {
            "varsIgnorePattern": "^_",
            "argsIgnorePattern": "^_",
        }],
    },
}, {
    files: ["**/*.js"],

    rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
    },
}, globalIgnores([
    "**/dist/**/*",
    "**/build/**/*",
    "**/node_modules/**/*",
    "**/config-overrides.js",
    "types/**/*",
    "**/*.d.ts",
    "eslint.config.js",
    "eslint.config.cjs",
    "**/*.json",
])]);
