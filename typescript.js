const off = 0;
// const warn = 1;
const error = 2;

module.exports = {
	extends: [
		'./base.js', //
		'plugin:@typescript-eslint/eslint-recommended',
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
		'no-unused-vars': off,
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/prefer-regexp-exec': off,
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
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: true,
				},
			},
		],
		'@typescript-eslint/no-explicit-any': off,
		'@typescript-eslint/array-type': [
			error,
			{
				default: 'array-simple',
			},
		],
		'@typescript-eslint/max-classes-per-file': off,
		'@typescript-eslint/max-line-length': off,
		'@typescript-eslint/member-ordering': error,
		// '@typescript-eslint/no-duplicate-variable': [
		// 	error,
		// 	{
		// 		default: ['check-parameters'],
		// 	},
		// ],
		'@typescript-eslint/no-empty-interface': off,
		'@typescript-eslint/no-empty': off,
		// '@typescript-eslint/no-shadowed-variable': error,
		// '@typescript-eslint/no-switch-case-fall-through': error,
		'@typescript-eslint/no-var-requires': off,
		'@typescript-eslint/object-literal-sort-keys': off,
		// '@typescript-eslint/switch-default': error,
		'@typescript-eslint/typedef': [
			off,
			{
				default: ['property-declaration'],
			},
		],
		// '@typescript-eslint/variable-name': [
		// 	error,
		// 	{
		// 		default: ['ban-keywords', 'check-format', 'allow-leading-underscore', 'allow-pascal-case'],
		// 	},
		// ],
	},
};
