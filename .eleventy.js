module.exports = function(eleventyConfig) {
  // Copy all static folders straight to output
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("assets");
  // Keep these files too
  eleventyConfig.addPassthroughCopy("LICENSE");
  eleventyConfig.addPassthroughCopy("README.md");
  return {
    dir: {
      input: ".",        // where your source files are now
      output: "_site"    // where the built site goes
    }
  };
};
