var _ = require('lodash');
var CLIEngine = require('eslint').CLIEngine;

var cli = new CLIEngine({ configFile: './base.js' });

describe('Base', function() {
	it('should catch lint', function() {
		var report = cli.executeOnFiles(['test/base/test-source.js']);

		var errors = _.map(report.results[0].messages, function(message) {
			return _.pick(message, 'ruleId', 'severity');
		});

		expect(errors).toEqual([
			{ ruleId: 'prettier/prettier', severity: 1 },
			{ ruleId: 'prettier/prettier', severity: 1 },
			{ ruleId: 'prettier/prettier', severity: 1 },
		]);
	});
});
