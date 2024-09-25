import globals from 'globals'
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('eslint-config-standard'),
  {
    languageOptions: {
      parser: tseslint.parser
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      indent: ['error', 2],
      semi: ['warn', 'never'],
      'no-undef': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'space-before-function-paren': 'off',
      'no-useless-constructor': 'off',
      quotes: ['warn', 'single'],
      '@stylistic/indent': ['error', 2]
    }
  },
  {
    files: ['/web/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  },
  {
    files: ['/api/**/*.{ts,tsx}'],
    rules: {
      indent: ['error', 2],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },
      parserOptions: {
        project: './api/tsconfig.json',
        sourceType: 'module'
      }
    }
  },
  eslintConfigPrettier
)
