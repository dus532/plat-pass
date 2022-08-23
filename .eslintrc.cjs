module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'eslint-plugin-import'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  ignorePatterns: ['*.config.js', '*.cjs'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
