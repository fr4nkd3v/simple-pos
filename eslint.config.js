import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// Plugins and additional configs
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierConfig from 'eslint-config-prettier'; // Disable rules in conflict
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', '**/*.config.js'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended, // JS base rules
      tseslint.configs.recommended,
      tseslint.configs.eslintRecommended,
      // ...tseslint.configs.recommended, // TypeScript rules
      // reactHooks.configs['recommended'], // React Hooks rules
      // jsxA11y.configs.recommended, // Accessibility rules (a11y)
      prettierConfig, // Disable ESlint format rules that conflicts with Prettier
    ],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // project: ['./tsconfig.json'],
        projectService: true,
        settings: {
          react: {
            version: 'detect',
          },
        },
      },
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      'simple-import-sort': simpleImportSort,
      prettier: prettierPlugin,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    },
  },
);