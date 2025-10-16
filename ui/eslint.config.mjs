import { FlatCompat } from '@eslint/eslintrc'
import perfectionist from 'eslint-plugin-perfectionist'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      perfectionist
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'perfectionist/sort-exports': ['error', { order: 'asc', type: 'alphabetical' }],

      // Sort imports and exports alphabetically
      'perfectionist/sort-imports': ['error', { order: 'asc', type: 'alphabetical' }],

      'perfectionist/sort-interfaces': ['error', { order: 'asc', type: 'alphabetical' }],
      // Sort JSX props alphabetically
      'perfectionist/sort-jsx-props': ['error', { order: 'asc', type: 'alphabetical' }],

      // Sort TypeScript interfaces and types alphabetically
      'perfectionist/sort-object-types': ['error', { order: 'asc', type: 'alphabetical' }],

      // Sort object properties alphabetically
      'perfectionist/sort-objects': ['error', { order: 'asc', type: 'alphabetical' }]
    }
  }
]

export default eslintConfig
