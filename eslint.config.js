export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: true,
        document: true
      }
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'double']
    }
  }
];
