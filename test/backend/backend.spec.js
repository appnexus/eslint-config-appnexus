const _ = require('lodash');
const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
	configFile: './backend.js',
});

describe('Backend', () => {
	it('should catch lint', () => {
		const report = cli.executeOnFiles(['test/backend/test-source.js']);

		const errors = _.map(report.results[0].messages, (message) => {
			return _.pick(message, 'ruleId', 'severity');
		});

		expect(errors).toEqual([
			{
				ruleId: 'hapi/hapi-for-you',
				severity: 2,
			},
			{
				ruleId: 'prettier/prettier',
				severity: 1,
			},
			{
				ruleId: 'hapi/no-arrowception',
				severity: 2,
			},
			{
				ruleId: 'no-unreachable',
				severity: 2,
			},
		]);
	});
});
