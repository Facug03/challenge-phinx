import globals from 'globals'
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config([
  {
    files: ['/web/**/*.{ts,tsx}', '/api/**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended, 'prettier', 'standard'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      semi: ['warn', 'never'],
      'no-eval': 'off',
      'no-undef': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'space-before-function-paren': 'off',
      'no-useless-constructor': 'off'
    }
  },
  {
    ignores: ['dist'],
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
      parsertOptions: {
        project: './api/tsconfig.json',
        sourceType: 'module'
      }
    }
  }
])
