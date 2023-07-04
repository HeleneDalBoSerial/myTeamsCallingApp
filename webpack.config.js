const path = require("path");

module.exports = {
  entry: "./client.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
