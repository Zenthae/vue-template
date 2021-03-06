module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-vue', '@snowpack/plugin-dotenv'],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    baseUrl: '/vue-template/',
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  scripts: { 'build:css': 'postcss' },
};
