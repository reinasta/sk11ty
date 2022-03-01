module.exports = config => {

  // plumbing and configuration

  // Set images to pass through to the dist folder
  config.addPassthroughCopy("./src/_includes/images/");

  // set fonts to pass through to the dist folder
  config.addPassthroughCopy("./src/_includes/fonts/");

  // main site strucure
  return {
    // read html, markdown files as nunjucks templates
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};