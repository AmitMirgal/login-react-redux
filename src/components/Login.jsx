import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.scss';
import { connect } from 'react-redux';
import { user } from '../actions/user';

const Login = props => {
    const { login } = props;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const loginSubmit = useCallback(() => {
        login(123, userName);
    }, [userName, login])

    return (
        <div className={'login-panel'}>
            <TextField
                required
                id="standard-required"
                label="Username"
                value={userName}
                onChange={event => setUserName(event.target.value)}
            />
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <Button variant="contained" color="primary" onClick={loginSubmit}>
                Login
            </Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    login: (id, userName) => dispatch(user(id, userName))
})
export default connect(null, mapDispatchToProps)(Login);