import React from 'react';

const Comment = ({ name, body }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{body}</p>
    </li>
  );
};

export default Comment;
