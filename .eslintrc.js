module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: ['standard'],
    overrides: [
    ],
    plugins: ['import', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-undef': 'error',
        indent: ['error', 4],
        'no-unused-vars': 'warn',
        'import/no-unresolved': 'error',
        'prefer-const': ['warn', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true
        }]
    }
}
