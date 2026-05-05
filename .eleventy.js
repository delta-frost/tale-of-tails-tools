module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("LICENSE");
  eleventyConfig.addPassthroughCopy("README.md");

  // Ignore Aider chat files
  eleventyConfig.ignores.add(".aider*");

  return {
    pathPrefix: "/tale-of-tails-tools/",
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
