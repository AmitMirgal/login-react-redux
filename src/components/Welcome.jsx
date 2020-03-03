import React from 'react';

const Welcome = props => {

    const { id, userName } = props;

    return (
        <h1>{`${id}-${userName}`}</h1>
    )
}

export default Welcome;