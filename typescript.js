const off = 0;
// const warn = 1;
const error = 2;

module.exports = {
	extends: [
		'./base.js', //
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
	},
	plugins: ['@typescript-eslint'],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	rules: {
		// Off
		'react/jsx-sort-props': 'off',
		'no-unused-vars': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/prefer-regexp-exec': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/max-classes-per-file': 'off',
		'@typescript-eslint/max-line-length': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-empty': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/object-literal-sort-keys': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/typedef': [
			off,
			{
				default: ['property-declaration'],
			},
		],

		// Errors
		'@typescript-eslint/no-unused-vars': [
			error,
			{
				vars: 'all',
				// args: 'after-used',
				ignoreRestSiblings: false,
				argsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/ban-ts-comment': error, // use eslint-disable-next-line instead
		'@typescript-eslint/array-type': [
			error,
			{
				default: 'array-simple',
			},
		],
		'@typescript-eslint/member-ordering': error,

		//  Warnings - will become errors in next major version
		'@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions'] }],

		// Off - no sure what to do with these
		'@typescript-eslint/unbound-method': 'off',
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				// Off
				'react/prop-types': 'off',
				'@typescript-eslint/camelcase': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',

				// Error
				'@typescript-eslint/no-shadow': ['error'],
				'@typescript-eslint/restrict-plus-operands': 'error',
				'@typescript-eslint/no-unsafe-member-access': 'error',
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'default',
						format: ['camelCase'],
					},
					{
						selector: 'variable',
						format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'enumMember',
						format: ['camelCase', 'UPPER_CASE'],
					},
					{
						selector: 'function',
						format: ['camelCase', 'PascalCase'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'property',
						format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'parameter',
						format: ['camelCase', 'snake_case', 'PascalCase'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'typeLike',
						format: ['PascalCase'],
					},
					{
						selector: 'interface',
						format: ['PascalCase'],
						custom: {
							regex: '^I[A-Z]',
							match: true,
						},
					},
				],
			},
		},
	],
};
