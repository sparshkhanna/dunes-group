const TerserPlugin = require('terser-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            // Enhanced minification for production
            if (env === 'production') {
                // Configure Terser for aggressive minification
                webpackConfig.optimization.minimizer = [
                    new TerserPlugin({
                        terserOptions: {
                            compress: {
                                drop_console: true, // Remove console.log statements
                                drop_debugger: true, // Remove debugger statements
                                pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
                                passes: 2, // Multiple compression passes
                                unsafe: true, // Enable unsafe optimizations
                                unsafe_comps: true,
                                unsafe_Function: true,
                                unsafe_math: true,
                                unsafe_proto: true,
                                unsafe_regexp: true,
                                unsafe_undefined: true,
                            },
                            mangle: {
                                reserved: ['React', 'ReactDOM'], // Don't mangle React
                                safari10: true, // Better Safari 10 support
                            },
                            format: {
                                comments: false, // Remove all comments
                                ascii_only: true, // Use ASCII only
                            },
                            sourceMap: false, // Disable source maps for security
                        },
                        extractComments: false, // Don't extract comments to separate files
                    }),
                    new CssMinimizerPlugin({
                        minimizerOptions: {
                            preset: [
                                'default',
                                {
                                    discardComments: { removeAll: true },
                                    normalizeWhitespace: true,
                                    colormin: true,
                                    minifyFontValues: true,
                                    minifyGradients: true,
                                    minifyParams: true,
                                    minifySelectors: true,
                                },
                            ],
                        },
                    }),
                ];

                // Add JavaScript obfuscator with balanced security
                webpackConfig.plugins.push(
                    new WebpackObfuscator({
                        // Balanced obfuscation for security and performance
                        compact: true,
                        controlFlowFlattening: true,
                        controlFlowFlatteningThreshold: 0.5,
                        deadCodeInjection: false, // Disabled to reduce bundle size
                        debugProtection: false, // Disabled to reduce bundle size
                        disableConsoleOutput: true,
                        identifierNamesGenerator: 'hexadecimal',
                        log: false,
                        numbersToExpressions: true,
                        renameGlobals: false,
                        selfDefending: true,
                        simplify: true,
                        splitStrings: true,
                        splitStringsChunkLength: 10,
                        stringArray: true,
                        stringArrayEncoding: ['base64'],
                        stringArrayThreshold: 0.75,
                        transformObjectKeys: true,
                        unicodeEscapeSequence: false,
                    })
                );

                // Disable source maps for security
                webpackConfig.devtool = false;
            }

            return webpackConfig;
        },
    },
}; 