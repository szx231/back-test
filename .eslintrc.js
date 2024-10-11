module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'lines-between-class-members': 'off',
    'no-async-promise-executor': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-plusplus': 'off',
    camelcase: 'off',
    'dot-notation': 'off',
    'no-sequences': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'import/newline-after-import': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
  },
};
