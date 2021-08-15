const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  pwa: {
    dest: "public",
    disable: !isProd,
  },
};
