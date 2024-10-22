import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from "globals";

export default [
  {
    ignores: ['node_modules/**', 'build/**', 'dist/**', '**/lang/**', '**/public/**', 'tinyPublicInstall.js', '**/__tests__/**', 'serve.js'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin
      },
    },
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'react-hooks': reactHooks,
      prettier,
    },
    rules: {
      'react/prop-types': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'jsx-a11y/no-onchange': 'off',
      // @TODO Ajustar todos
      'no-unused-vars': 'off',
      'no-extra-boolean-cast': 'warn',
      'no-constant-binary-expression': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettierConfig,
];