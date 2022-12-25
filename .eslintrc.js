module.exports = {
  root: true,

  env: {
    node: true,
  },

  parser: '@typescript-eslint/parser',

  extends: [
    '@kdujs/standard',
    '@kdujs/typescript',
  ],

  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
