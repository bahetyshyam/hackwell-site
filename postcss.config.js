const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.js', './public/index.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
};
