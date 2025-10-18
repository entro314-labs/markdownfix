/**
 * ESLint configuration for MDX files
 * Uses eslint-plugin-mdx with existing remark-lint configuration
 *
 * This integrates with the existing .remarkrc.js file to provide:
 * - JSX/JavaScript linting inside MDX code blocks
 * - IDE integration for better developer experience
 * - Unified linting workflow alongside remark-lint
 */

import * as mdxPlugin from 'eslint-plugin-mdx';

export default [
  {
    // Ignore common directories
    // Replaces .eslintignore file (no longer supported in ESLint 9)
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'coverage/**',
      'pnpm-lock.yaml',
      '**/*.config.js',
      '**/*.config.mjs',
      'README.md',
      'CHANGELOG.md',
      'LICENSE',
      'PUBLISHING.md',
      'ESLINT_INTEGRATION.md',
      '.cache/**',
      '.remark-cache/**'
    ]
  },

  // MDX/MDC files configuration
  {
    name: 'custom/mdx/recommended',
    files: ['**/*.{md,mdx,mdc,mdd}'],
    ...mdxPlugin.flat,
    processor: mdxPlugin.createRemarkProcessor({
      lintCodeBlocks: true, // Enable linting of code blocks
      languageMapper: {}    // Use default language mappings
    }),
    rules: {
      // MDX-specific rules from eslint-plugin-mdx
      // The remark-lint rules from .remarkrc.js will be automatically used
      'mdx/remark': 'error',
    },
    settings: {
      'mdx/code-blocks': true,  // Enable code block linting
      'mdx/language-mapper': {} // Use default mappings
    }
  },

  // Code blocks in MDX/MDC (optional - for stricter linting)
  {
    name: 'custom/mdx/code-blocks',
    files: ['**/*.{md,mdx,mdc,mdd}'],
    ...mdxPlugin.flatCodeBlocks,
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      }
    },
    rules: {
      ...mdxPlugin.flatCodeBlocks.rules,
      // Add JavaScript rules for code blocks
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
      // Allow common globals in documentation examples
      'no-undef': 'off',
    }
  }
];
