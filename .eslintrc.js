module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'import',
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // A few more opinions in addition to the Airbnb TS Lint Config
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    
    // 'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/no-require-imports': ['error'],

    // Require all imported dependencies are actually declared in package.json
    'import/no-extraneous-dependencies': [
      'error',
      {
        // Disallow importing optional dependencies (those shouldn't be in use in the project)
        optionalDependencies: false,
        // Disallow importing peer dependencies (that aren't also direct dependencies)
        peerDependencies: false,
      },
    ],
    // Require all imported libraries actually resolve (!!required for import/no-extraneous-dependencies to work!!)
    'import/no-unresolved': ['error'],

    // Require an ordering on all imports
    'import/order': ['warn', {
      groups: ['builtin', 'external'],
      alphabetize: { order: 'asc', caseInsensitive: true },
    }],

    // One of the easiest mistakes to make
    '@typescript-eslint/no-floating-promises': ['error'],

    // Don't leave log statements littering the premises!
    'no-console': ["error", { allow: ["info", "warn", "error"] }],

    // Member ordering
    '@typescript-eslint/member-ordering': ['error', {
      default: [
        'public-static-field',
        'public-static-method',
        'protected-static-field',
        'protected-static-method',
        'private-static-field',
        'private-static-method',

        'field',

        // Constructors
        'constructor', // = ["public-constructor", "protected-constructor", "private-constructor"]

        // Methods
        'method',
      ],
    }],
  },
};
