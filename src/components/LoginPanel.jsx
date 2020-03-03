import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import Welcome from './Welcome';
import { isDefined } from '../utils/helper';

const LoginPanel = props => {

    const { user } = props;

    return (
        <div>
            {isDefined(user.userName) && <Login />}
            {user.userName &&
                <Welcome id={user.userId} userName={user.userName} />
            }
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})

export default connect(mapStateToProps)(LoginPanel);
