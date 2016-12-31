import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/index';
import Header from './header.jsx';

const mapStateToProps = (state, ownProps) => ( {
        isLoggedIn: state.auth.isLoggedIn,
        personalWelcomeMsg: state.auth.personalWelcomeMsg
    }
)

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container main-container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        );
    }
}

const Application = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Application;
