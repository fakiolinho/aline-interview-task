import React from 'react';
import { connect } from 'react-redux'

import * as actions from '../actions'

class Login extends React.Component {

	state = { username : '', password : '' };

	login = props => this.props.login(this.state.username, this.state.password);

	logout = props =>  this.props.logout();

    onChange = event => {
        this.state[event.target.id] = event.target.value;
        return this.state;
    }

    render() {
        const {login, logout} = this.props
        return (
            <div>
                <h1>Login</h1>
                { !this.props.isLoggedIn ?
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-4">
                                <input type="email" className="form-control" placeholder="Email" onChange={this.onChange} id="username" />
                                <span>john@doe.com</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-4">
                                <input type="password" className="form-control" placeholder="Password" onChange={this.onChange} id="password" />
                                <span>secret</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="button" onClick={this.login} className="btn btn-default">Sign in</button>
                            </div>
                        </div>
                    </form>:
                    <button type="button" onClick={this.logout} className="btn btn-rounded">Logout</button>
                }

            </div>
        );
    }

}


export default connect(null, actions)(Login);
