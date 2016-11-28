var _ = require('lodash');
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({	configFile: './backend.js' });

describe('Backend', function() {

	it('should catch lint', function() {

		var report = cli.executeOnFiles(["test/backend/test-source.js"]);

		var errors = _.map(report.results[0].messages, function(message) {
			return _.pick(message, 'ruleId', 'severity');
		});

		expect(errors).toEqual([
			{ ruleId: 'hapi/hapi-for-you', severity: 2 },
			{ ruleId: 'hapi/no-arrowception', severity: 2 },
			{ ruleId: 'no-unreachable', severity: 2 },
		]);

	});

});
