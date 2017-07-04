import React from 'react';
import Note from 'Note';

var Notes = React.createClass({
	render: function() {
		const {notes, handleDelete} = this.props;

		return (
			<ul>
				{
					notes.map(note =>
						<li key={note.id}>
							<Note>
								{note.task}
								<button onClick={handleDelete.bind(null, note.id)}>delete</button>
							</Note>
						</li>
						)
				}
			</ul>
		);
	}
});

module.exports = Notes;