const _ = require('lodash');
const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
	configFile: './typescript.js',
});

describe.skip('Typescript', () => {
	it('should catch lint', () => {
		expect.assertions(1);

		const report = cli.executeOnFiles(['test/typescript/test-source.ts']);

		const errors = _.map(report.results[0].messages, (message) => {
			return _.pick(message, 'ruleId', 'severity');
		});

		expect(errors).toEqual([
			{
				ruleId: '@typescript-eslint/no-inferrable-types',
				severity: 2,
			},
			{
				ruleId: '@typescript-eslint/no-unused-vars',
				severity: 2,
			},
		]);
	});
});
