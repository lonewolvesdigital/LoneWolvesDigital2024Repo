// // next.config.js
// module.exports = {
//   experimental: {
//     forceSwcTransforms: true,
//   },
// }

// const path = require("path");


// module.exports = {
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, "css")],
//   },
//   trailingSlash: true,
//   devIndicators: {
//     buildActivity: false,
//   },
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
// };


const path = require("path");

module.exports = {
  reactStrictMode: true,

  // Needed if you're using <Image>
  images: {
    unoptimized: true,
  },

  // Enable static HTML export
  trailingSlash: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },

  devIndicators: {
    buildActivity: false,
  },

  eslint: {
    ignoreDuringBuilds: false,
  },

  experimental: {
    forceSwcTransforms: true,
  },
};
