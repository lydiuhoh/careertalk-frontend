module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'new-cap': 0,
    'no-constant-condition': 0,
    'no-param-reassign': 0,
    'no-continue': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: '^__' }],
    'no-use-before-define': 0,
    'no-shadow': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'object-curly-newline': 0,
    'arrow-body-style': 0,
    'no-undef': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'arrow-parens': 0
  }
};
