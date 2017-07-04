import React from 'react';
import uuid from 'uuid';
import Notes from 'Notes';

var App = React.createClass({
	getInitialState: function() {
		return {
			notes : [
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Do laundry'
				}
			]
		};
	},

	handleAddNew: function() {
		this.setState(() => ({
			notes: this.state.notes.concat([{
					id: uuid.v4(),
					task: 'new note'
				}])
		}));
	},

	handleDelete: function(id, e) {
		// Avoid bubbling to edit
		e.stopPropagation();

		this.setState(() => ({
			notes: this.state.notes.filter(note => note.id !== id)
		}));
	},

	render: function() {
		return (
			<div>
				<button onClick={this.handleAddNew}>New</button>
				<Notes
					notes={this.state.notes}
					handleDelete={this.handleDelete}
				/>
			</div>
		);
	}
});

module.exports = App;