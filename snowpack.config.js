// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import('snowpack').SnowpackUserConfig } */
module.exports = {
  mount: {
    'src': '/'
  },
  optimize: {
    bundle: false,
    minify: true,
    target: 'es2018',
  },
};
