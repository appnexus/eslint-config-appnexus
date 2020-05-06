module.exports = {
	env: {
		node: true,
		es6: true,
		jest: true,
	},
	parserOptions: {
		sourceType: 'module',
	},
	extends: [
		'prettier', //
		'eslint:recommended',
	],
	plugins: [
		'import', //
		'lodash',
		'promise',
		'prettier',
	],
	settings: {
		'import/extensions': ['js'],
	},
	rules: {
		'prettier/prettier': 'error',
		'no-use-before-define': 'error',
		// 'arrow-parens': [2, 'always'], - Handled by Prettier
		// 'arrow-spacing': [2, { before: true, after: true }], - Handled by Prettier
		// 'comma-dangle': [2, 'always-multiline'], - Handled by Prettier
		// 'comma-spacing': 2, - Handled by Prettier
		'camelcase': 'off',
		'constructor-super': 2,
		// 'eol-last': 2, - Handled by Prettier
		'import/default': 2,
		'import/export': 2,
		'import/imports-first': 2,
		'import/named': 2,
		'import/namespace': 2,
		'import/newline-after-import': 2,
		'import/no-extraneous-dependencies': 2,
		'import/no-mutable-exports': 2,
		'import/no-named-as-default-member': 2,
		'import/no-named-as-default': 2,
		'import/no-unresolved': [
			2,
			{
				commonjs: true,
			},
		],
		// 'indent': [2, 'tab', { SwitchCase: 1 }], - Handled by Prettier
		// 'key-spacing': [2, { mode: 'minimum' }], - Handled by Prettier
		// 'keyword-spacing': 2, - Handled by Prettier
		// 'new-parens': 2, - Handled by Prettier
		'no-case-declarations': 2,
		'no-class-assign': 2,
		'no-cond-assign': 2,
		'no-console': [
			1,
			{
				allow: ['warn', 'error', 'info'],
			},
		],
		// 'no-confusing-arrow': [2, { allowParens: true }], - Handled by Prettier
		'no-constant-condition': 2,
		'no-empty-pattern': 2,
		'no-empty': 2,
		// 'no-extra-parens': [2, 'functions'], - Handled by Prettier
		'no-global-assign': 2,
		'no-inner-declarations': 2,
		'no-invalid-regexp': 2,
		'no-mixed-requires': 2,
		// 'no-multiple-empty-lines': [2, { max: 2 }], - Handled by Prettier
		'no-negated-in-lhs': 2,
		'no-new-require': 2,
		'no-path-concat': 2,
		'no-proto': 2,
		'no-regex-spaces': 2,
		'no-restricted-modules': [2, 'sys', '_linklist'],
		'no-sparse-arrays': 2,
		// 'no-trailing-spaces': 2, - Handled by Prettier
		'no-undef': 2,
		'no-unsafe-finally': 2,
		'no-unsafe-negation': 2,
		'no-unused-vars': [
			2,
			{
				args: 'none',
			},
		],
		'prefer-const': 2,
		'promise/catch-or-return': 2,
		'promise/param-names': 2,
		// 'quotes': [2, 'single', { allowTemplateLiterals: true }], - Handled by Prettier
		'require-yield': 2,
		// 'semi': 2, - Handled by Prettier
		// 'space-before-blocks': [2, 'always'], - Handled by Prettier
		// 'space-before-function-paren': [2, 'never'], - Handled by Prettier
		// 'space-in-parens': [2, 'never'], - Handled by Prettier
		// 'space-unary-ops': 2, - Handled by Prettier
		// 'template-curly-spacing': 2, - Handled by Prettier

		//  Warnings - will become errors in next major version

		// Disabled - left to consumer to define
		'import/prefer-default-export': 0,
		'lodash/chaining': 0,
		'quote-props': 0,
		'promise/always-return': 0,

		// Disable for Prettier
		'no-extra-semi': 0,
		'no-mixed-spaces-and-tabs': 0,
		'no-unexpected-multiline': 0,

		// Unspecified
		// 'import/extensions'
		// 'import/first'
		// 'import/max-dependencies'
		// 'import/no-absolute-path'
		// 'import/no-amd'
		// 'import/no-commonjs'
		// 'import/no-deprecated'
		// 'import/no-duplicates'
		// 'import/no-dynamic-require'
		// 'import/no-internal-modules'
		// 'import/no-named-default'
		// 'import/no-namespace'
		// 'import/no-nodejs-modules'
		// 'import/no-restricted-paths'
		// 'import/no-unassigned-import '
		// 'import/no-webpack-loader-syntax'
		// 'import/order'
		// 'import/unambiguous'
		// 'lodash/callback-binding'
		// 'lodash/chain-style'
		// 'lodash/collection-method-value'
		// 'lodash/collection-return'
		// 'lodash/consistent-compose'
		// 'lodash/identity-shorthand'
		// 'lodash/matches-prop-shorthand'
		// 'lodash/matches-shorthand'
		// 'lodash/no-commit'
		// 'lodash/no-double-unwrap'
		// 'lodash/no-extra-args'
		// 'lodash/no-unbound-this'
		// 'lodash/path-style'
		// 'lodash/prefer-compact'
		// 'lodash/prefer-constant'
		// 'lodash/prefer-filter'
		// 'lodash/prefer-flat-map'
		// 'lodash/prefer-get'
		// 'lodash/prefer-includes'
		// 'lodash/prefer-invoke-map'
		// 'lodash/prefer-is-nil'
		// 'lodash/prefer-lodash-chain'
		// 'lodash/prefer-lodash-method'
		// 'lodash/prefer-lodash-typecheck'
		// 'lodash/prefer-map'
		// 'lodash/prefer-matches'
		// 'lodash/prefer-noop'
		// 'lodash/prefer-over-quantifier'
		// 'lodash/prefer-reject'
		// 'lodash/prefer-startswith'
		// 'lodash/prefer-thru'
		// 'lodash/prefer-times'
		// 'lodash/prefer-wrapper-method'
		// 'lodash/preferred-alias'
		// 'lodash/prop-shorthand'
		// 'lodash/unwrap'
		// 'promise/avoid-new'
		// 'promise/no-callback-in-promise'
		// 'promise/no-native'
		// 'promise/no-nesting'
		// 'promise/no-promise-in-callback'
		// 'promise/no-return-wrap'
		// 'promise/prefer-await-to-callbacks'
		// 'promise/prefer-await-to-then'
	},
};
