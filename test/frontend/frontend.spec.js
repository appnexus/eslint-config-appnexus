var _ = require('lodash');
var CLIEngine = require('eslint').CLIEngine;

var cli = new CLIEngine({	configFile: './frontend.js' });

describe('Frontend', function() {

	it('should catch lint', function() {

		var report = cli.executeOnFiles(['test/frontend/test-source.jsx']);

		var errors = _.map(report.results[0].messages, function(message) {
			return _.pick(message, 'ruleId', 'severity');
		});

		expect(errors).toEqual([{
			'ruleId': 'react/prop-types',
			'severity': 1,
		}]);

	});

	it('should catch missing react in scope', function() {

		var report = cli.executeOnFiles(['test/frontend/test-source-missing-react.jsx']);

		var errors = _.map(report.results[0].messages, function(message) {
			return _.pick(message, 'ruleId', 'severity');
		});

		expect(errors).toEqual([{
			'ruleId': 'react/react-in-jsx-scope',
			'severity': 2,
		}]);

	});

});
