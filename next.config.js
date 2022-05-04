/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');

const nextConfig = {
  reactStrictMode: true,

  env: {
    API_URL: process.env.API_URL,
    USER_MON: process.env.USER_MON,
    TOKEN_MON: process.env.TOKEN_MON,
    EMAIL_MON: process.env.EMAIL_MON,
    REFRESH_TOKEN_MON: process.env.REFRESH_TOKEN_MON
  },
};

module.exports = withPlugins([[withTM], nextConfig]);
