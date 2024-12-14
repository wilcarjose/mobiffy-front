const path = require('path');

module.exports = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'mobiffy.sfo3.digitaloceanspaces.com',
              pathname: '**',
          },
      ],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};
