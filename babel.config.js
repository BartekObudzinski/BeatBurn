module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@App': './src/App',
            '@Components': './src/Components',
            '@Navigation': './src/Navigation',
            '@Redux': './src/Redux',
            '@Locales': './src/Locales',
            '@Assets': './src/Assets',
            '@Hooks': './src/Hooks',
            '@Utils': './src/Utils',
          },
        },
      ],
      ['nativewind/babel'],
    ],
  };
};
