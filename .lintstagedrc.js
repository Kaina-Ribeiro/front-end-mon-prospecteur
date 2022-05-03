const path = require('path');

const buildEslintCommand = (filenames) =>
  `yarn lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  'src/**/*.{ts,tsx,css}': [buildEslintCommand],
};
