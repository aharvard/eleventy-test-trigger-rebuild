module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles/");

  return {
    dir: {
      input: "src"
    }
  };
};