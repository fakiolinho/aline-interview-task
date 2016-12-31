import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'

class Nav extends React.Component {

    logout = props => this.props.logout();

    render() {
        return (
            <div>
                <div className="pos-f-t">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/">Aline Task</Link>
                            </div>

                            <div id="navbar1" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                   <li className="active"><Link data-toggle="tab" to='/'>Home</Link></li>
                                   {this.props.isLoggedIn?
                                   <li><Link data-toggle="tab" to='/users'>Users</Link></li>
                                   :''}
                                   <li><Link data-toggle="tab" to='/contact'>Contact</Link></li>
                                   {!this.props.isLoggedIn?
                                   <li><Link data-toggle="tab" to='/login'>Login</Link></li>
                                   :<li><Link data-toggle="tab" onClick={this.logout} to='/login'>Logout</Link></li>}
                               </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ( {
        isLoggedIn: state.auth.isLoggedIn
    }
)

export default connect(mapStateToProps)(Nav);