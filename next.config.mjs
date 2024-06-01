import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
      config.plugins.push(
        new NodePolyfillPlugin({ excludeAliases: ['console'] }),
        new webpack.NormalModuleReplacementPlugin(
          /symbol-crypto-wasm-node/,
          '../../../symbol-crypto-wasm-web/symbol_crypto_wasm.js'
        ),
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer']
        }),
      );

      config.experiments = { asyncWebAssembly: true, topLevelAwait: true, layers: true };
      config.resolve.fallback = {
        "crypto": 'crypto-browserify',
        "stream": 'stream-browserify',
      }
      return config
    }
  };

export default nextConfig;
