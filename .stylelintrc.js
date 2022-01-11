const HtmlExtensions = ['.vue', '.htm', '.html']

const CssInJsExtensions = ['.ts', '.js', '.jsx']

module.exports = {
  extends: [
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: HtmlExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
      customSyntax: 'postcss-html',
    },
    {
      files: CssInJsExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
      customSyntax: '@stylelint/postcss-css-in-js',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.md'],
      customSyntax: 'postcss-markdown',
    },
  ],
}
