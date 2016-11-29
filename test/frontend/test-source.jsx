import React from 'react';

// react/prop-types
React.createClass({
	propTypes: {
		firstname: React.PropTypes.string.isRequired,
	},
	render: function() {
		return <div>
			{this.props.firstname}
			{this.props.lastname} // lastname type is not defined in propTypes
		</div>;
	},
});
