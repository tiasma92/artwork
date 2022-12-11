module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'tsconfig.json'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'plugin:import/errors', 
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
  }
}
