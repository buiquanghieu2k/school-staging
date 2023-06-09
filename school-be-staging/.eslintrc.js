module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: { project: ['./tsconfig.json'] },
  plugins: ['@typescript-eslint'],
}
