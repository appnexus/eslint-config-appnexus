const _ = require('lodash');
const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
	configFile: './base.js',
});

describe('Base', () => {
	it('should catch lint', () => {
		const report = cli.executeOnFiles(['test/base/test-source.js']);

		const errors = _.map(report.results[0].messages, (message) => {
			return _.pick(message, 'ruleId', 'severity');
		});

		expect(errors).toEqual([
			{
				ruleId: 'prettier/prettier',
				severity: 1,
			},
			{
				ruleId: 'prettier/prettier',
				severity: 1,
			},
			{
				ruleId: 'prettier/prettier',
				severity: 1,
			},
		]);
	});
});
