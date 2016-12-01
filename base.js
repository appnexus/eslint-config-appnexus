module.exports = {
	'env': {
		'node': true,
		'es6': true,
		'jest': true,
	},
	'parserOptions': {
		'sourceType': 'module',
	},
	'extends': 'eslint:recommended',
	'plugins': [
		'import',
		'lodash',
		'promise',
	],
	'settings': {
		'import/extensions': ['js'],
	},
	'rules': {
		'arrow-parens': [2, 'always'],
		'arrow-spacing': [2, { 'before': true,	'after': true }],
		'comma-dangle': [2, 'always-multiline'],
		'comma-spacing': 2,
		'constructor-super': 2,
		'eol-last': 2,
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
		'import/no-unresolved': [2, { 'commonjs': true }],
		'import/prefer-default-export': 0,
		'indent': [2, 'tab'],
		'key-spacing': [2, { 'mode': 'minimum' }],
		'keyword-spacing': 2,
		'lodash/chaining': 0,
		'new-parens': 2,
		'no-case-declarations': 'warn', // Set as major change warning due to eslint:recommend
		'no-class-assign': 2,
		'no-cond-assign': 'warn', // Set as major change warning due to eslint:recommend
		'no-confusing-arrow': [2, { 'allowParens': true }],
		'no-constant-condition': 'warn', // Set as major change warning due to eslint:recommend
		'no-empty-pattern': 'warn', // Set as major change warning due to eslint:recommend
		'no-empty': 'warn', // Set as major change warning due to eslint:recommend
		'no-extra-parens': [2, 'functions'],
		'no-global-assign': 'warn', // Set as major change warning due to eslint:recommend
		'no-inner-declarations': 'warn', // Set as major change warning due to eslint:recommend
		'no-invalid-regexp': 'warn', // Set as major change warning due to eslint:recommend
		'no-mixed-requires': 2,
		'no-multiple-empty-lines': [2, { 'max': 2 }],
		'no-negated-in-lhs': 2,
		'no-new-require': 2,
		'no-path-concat': 2,
		'no-proto': 2,
		'no-regex-spaces': 'warn', // Set as major change warning due to eslint:recommend
		'no-restricted-modules': [2, 'sys', '_linklist'],
		'no-sparse-arrays': 'warn', // Set as major change warning due to eslint:recommend
		'no-trailing-spaces': 2,
		'no-unsafe-finally': 'warn', // Set as major change warning due to eslint:recommend
		'no-unsafe-negation': 'warn', // Set as major change warning due to eslint:recommend
		'no-unused-vars': [2, { 'args': 'none' }],
		'prefer-const': 2,
		'promise/always-return': 2,
		'promise/catch-or-return': 2,
		'promise/no-native': 0,
		'promise/param-names': 2,
		'quotes': [2, 'single', { 'allowTemplateLiterals': true }],
		'require-yield': 'warn', // Set as major change warning due to eslint:recommend
		'semi': 2,
		'space-before-blocks': [2, 'always'],
		'space-before-function-paren': [2, 'never'],
		'space-in-parens': [2, 'never'],
		'space-infix-ops': 2,
		'space-unary-ops': 2,
		'template-curly-spacing': 2,

		// === Unspecified ===
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
		// 'promise/no-nesting'
		// 'promise/no-promise-in-callback'
		// 'promise/no-return-wrap'
		// 'promise/prefer-await-to-callbacks'
		// 'promise/prefer-await-to-then'
	},
};
