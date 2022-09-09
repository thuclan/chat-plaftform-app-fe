module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'css-modules'],
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:css-modules/recommended',
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'max-len': ['error', { code: 120 }],
        'no-console': 'off',
        'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
        'class-methods-use-this': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        // 'react/jsx-no-useless-fragment': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
        'react/state-in-constructor': ['warn', 'never'],
        'react/destructuring-assignment': ['warn', 'always', { ignoreClassFields: true }],
        'import/prefer-default-export': 'off',
        'import/default': 'off',
        'import/order': ['warn', { alphabetize: { order: 'asc' } }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                mjs: 'never',
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['/'],
            },
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': ['off', { allowArgumentsExplicitlyTypedAsAny: true }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-continue': 'off',
        'react/require-default-props': 'off',
        'no-use-before-define': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
