module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:node/recommended"],
    "plugins": ["node", "import"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "import/no-unresolved": [
            2,
            {
                "commonjs": true,
                "amd":true
            }
        ],
        "no-undef": "error",
        "import/no-extraneous-dependencies": "warn",
        "import/no-duplicates": "error",
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
        "node/no-unsupported-features/node-builtins": ["error", { "version": ">=10.0.0"}]
    }
}

