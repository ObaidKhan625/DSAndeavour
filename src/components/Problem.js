import React from 'react';

const Problem = ({problem}) => {
    return (
    <div>
        <h3>{problem.name}</h3>
        <span>{problem.type}</span>
    </div>
    )
}

export default Problem