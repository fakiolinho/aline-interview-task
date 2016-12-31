import React from 'react';
import { connect } from 'react-redux'

import * as actions from '../actions'

class User extends React.Component {

	render(){
		let rows=this.props.users.map(person => {
			return <PersonRow key={person.id} data={person} deleteUser={this.props.deleteUser} />
		})
		return(
			<div>
				<h1>Users</h1>
				<table className="table table-striped table-bordered table-hover table-condensed">
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		)
	}
}

const PersonRow = (props) => {

    const deleteUser = () => {
        const id = props.data.id;
        props.deleteUser(id);
    };

	return (
		<tr>
			<td>{props.data.id}</td>
			<td>{props.data.name}</td>
			<td><button type="button" className="btn btn-xs btn-danger" onClick={deleteUser}> Delete </button></td>
		</tr>
	)
}

const mapStateToProps = (state, ownProps) => ( {
		users: state.user.data
	}
)

export default connect(mapStateToProps, actions)(User);