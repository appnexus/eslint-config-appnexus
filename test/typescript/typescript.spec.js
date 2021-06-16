const _ = require('lodash');
const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
	configFile: './typescript.js',
});

describe('Typescript', () => {
	it('should catch lint', () => {
		expect.assertions(1);

		const report = cli.executeOnFiles(['test/typescript/test-source.ts']);

		const errors = _.map(report.results[0].messages, (message) => {
			return _.pick(message, 'ruleId', 'severity', 'message');
		});

		expect(errors).toEqual([
			{
				message: 'Type number trivially inferred from a number literal, remove type annotation.',
				ruleId: '@typescript-eslint/no-inferrable-types',
				severity: 2,
			},
			{
				message: "'x' is assigned a value but never used.",
				ruleId: '@typescript-eslint/no-unused-vars',
				severity: 2,
			},
			{
				message: "'htmlAttributes' is assigned a value but never used.",
				ruleId: '@typescript-eslint/no-unused-vars',
				severity: 2,
			},
			{
				message: 'Interface name `TestValue` must match the RegExp: /^I[A-Z]/u',
				ruleId: '@typescript-eslint/naming-convention',
				severity: 2,
			},
			{
				message: "'TestValue' is defined but never used.",
				ruleId: '@typescript-eslint/no-unused-vars',
				severity: 2,
			},
		]);
	});
});
