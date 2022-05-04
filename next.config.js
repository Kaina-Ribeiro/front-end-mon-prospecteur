/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');

const nextConfig = {
  reactStrictMode: true,

  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = withPlugins([[withTM], nextConfig]);
