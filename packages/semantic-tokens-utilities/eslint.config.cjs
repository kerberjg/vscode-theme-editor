const {
    defineConfig,
} = require("eslint/config");

module.exports = defineConfig([{
    extends: require("../../eslint.config.js"),
}]);