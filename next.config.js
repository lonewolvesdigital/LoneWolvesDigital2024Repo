const path = require("path");

module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: false,
  }
};
