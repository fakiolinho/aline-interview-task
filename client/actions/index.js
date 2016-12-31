import axios from 'axios'
import { browserHistory } from 'react-router';

import * as types from '../actionTypes/auth';
import * as userTypes from '../actionTypes/user';

// login
export const login = (username, password) => dispatch => {

    // Node JS REST API call
    axios.post('/rest/login', {username, password})
            .then( response => {
                if (response.data.isLoggedIn) {
                    sessionStorage.setItem('twToken', response.data.jwToken);
                    browserHistory.push('/');
                    dispatch({ type: types.LOG_IN, payload : response.data.personalWelcomeMsg });
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                throw (error);
            });

};

// logout
export const logout = () => dispatch => {
    sessionStorage.removeItem('twToken')
    dispatch({ type: types.LOG_OUT });
};

export const deleteUser = (id) => dispatch => {
    dispatch({ type: userTypes.DELETE_USER, payload : id });
}

// sendmail
export const sendmail = (name, email, message) => dispatch => {

    // Node JS REST API call
    axios.post('/rest/sendmail', {name, email, message})
            .then( response => {
                alert(response.data.message)
            })
            .catch(error => {
                throw (error);
            });

};