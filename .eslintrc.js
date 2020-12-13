module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  plugins: ['import'],
  extends: 'airbnb-typescript-prettier',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'import/prefer-default-export': 'off',
    'newline-before-return': ['warn'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-multi-spaces': ['warn'],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prefer-promise-reject-errors': ['off'],
    'no-return-assign': ['warn'],
    'no-dupe-keys': ['warn'],
    'no-useless-escape': ['warn'],
    yoda: ['warn'],
    'no-underscore-dangle': ['off'],
    'no-param-reassign': ['off'],
    'no-var': ['warn'],
    'no-unused-vars': ['warn'],
    'prefer-const': ['warn'],
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'no-buffer-constructor': ['warn'],
    'prefer-destructuring': ['warn'],
    'spaced-comment': ['warn'],
    strict: ['warn'],
    'import/newline-after-import': ['warn'],
    'import/order': [
      'warn',
      {
        groups: ['external', 'internal', 'parent', 'sibling', 'index', 'builtin'],
        'newlines-between': 'always',
      },
    ],
    'no-else-return': ['warn'],
    'consistent-return': ['warn'],
    'lines-around-directive': ['warn'],
    'prefer-template': ['warn'],
    'one-var': ['warn'],
    'no-useless-rename': ['warn'],
    'array-callback-return': ['warn'],
    'new-cap': ['warn'],
    'vars-on-top': ['warn'],
    'no-lonely-if': ['warn'],
    'no-useless-concat': ['warn'],
    'no-unused-expressions': ['warn'],
    'no-unneeded-ternary': ['warn'],
    radix: 0,
    'no-nested-ternary': ['warn'],
    camelcase: ['warn'],
    'import/no-extraneous-dependencies': ['off'],
    'no-undef': ['warn'],
    'import/no-dynamic-require': ['off'],
    'no-new-require': ['warn'],
    'operator-assignment': ['warn'],
    'global-require': ['warn'],
    'no-multi-assign': ['warn'],
    'no-restricted-syntax': ['warn'],
    'guard-for-in': ['warn'],
    'dot-notation': ['warn'],
    'no-unreachable': ['warn'],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],
    quotes: ['warn', 'single'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: ['return', 'block-like'] },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': ['off'],
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-curly-spacing': 'warn',
    'object-curly-spacing': ['error', 'always'],
  },
};
