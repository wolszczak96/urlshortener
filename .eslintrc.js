module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'react-app',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  plugins: ['@typescript-eslint', 'react-hooks', '@emotion'],
  rules: {
    'brace-style': 'error',
    camelcase: 'off',
    'capitalized-comments': 'off',
    curly: 'error',
    'import/default': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
      },
    ],
    'max-params': 'off',
    'no-implicit-coercion': 'off',
    'no-multi-assign': 'off',
    'no-negated-condition': 'off',
    'no-shadow': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'prefer-destructuring': 'warn',
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    strict: ['error', 'never'],
    'valid-jsdoc': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      { allowBoolean: true, allowAny: true },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
  },
}
