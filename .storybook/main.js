const custom = require('../webpack.config');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    return { ...config, module: { ...config.module, rules: config.module.rules.concat(custom.module.rules) } };
    // return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/angular",
  core: {
    "builder": "webpack5"
  },
  angularOptions: {
    enableIvy: true,
  },
}
