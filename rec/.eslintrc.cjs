module.exports = {
  env: {
    es2021: true,
    node: true,
    // on utilise jest !
    jest: true
  },
  extends: ['standard'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      }
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // on désactive la règle
    'import/prefer-default-export': 'off'
  }
}
