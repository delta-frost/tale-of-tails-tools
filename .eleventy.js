module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("LICENSE");
  eleventyConfig.addPassthroughCopy("README.md");

  return {
    pathPrefix: "/tale-of-tails-tools/",   // ← add this
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
