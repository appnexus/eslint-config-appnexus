const _ = require('lodash');
const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
	configFile: './frontend.js',
});

describe('Frontend', () => {
	it.skip('should catch lint', () => {
		const report = cli.executeOnFiles(['test/frontend/test-source.jsx']);

		const errors = _.map(report.results[0].messages, function (message) {
			return _.pick(message, 'ruleId', 'severity');
		});

		expect(errors).toEqual([
			{
				ruleId: 'react/prop-types',
				severity: 1,
			},
		]);
	});

	it('should catch missing react in scope', () => {
		const report = cli.executeOnFiles(['test/frontend/test-source-missing-react.jsx']);

		const errors = _.map(report.results[0].messages, function (message) {
			return _.pick(message, 'ruleId', 'severity');
		});

		expect(errors).toEqual([
			{
				ruleId: 'react/react-in-jsx-scope',
				severity: 2,
			},
		]);
	});
});
