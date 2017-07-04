import React from 'react';

var Note = React.createClass({
	render: function() {
		const {task, handleDelete} = this.props;

		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Note;