import React from 'react';

function Post(props) {
    const { name, symbol } = props.data
    return (
      <div className="post">
        <h1>{symbol}</h1>
        <p>{name}</p>
      </div>
    );
}

export default Post