const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
  resolver: {
    extraNodeModules: {
      '~': `${__dirname}/src`,
    },
    // Connect-ES and Protobuf-ES use package exports
    // (https://nodejs.org/docs/latest-v12.x/api/packages.html#packages_exports).
    //
    // We need to enable support for them in Metro. See https://metrobundler.dev/docs/package-exports/
    unstable_enablePackageExports: true,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
