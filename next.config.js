const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProduction ? '/silver-adventure' : '',
  env: {
    API_ACCESS_TOKEN: process.env.API_ACCESS_TOKEN,
  },
};
