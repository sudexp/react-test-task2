import React, { useDeferredValue } from 'react';

import Comment from './Comment';

const Comments = ({ filteredComments = [] }) => {
  const values = useDeferredValue(filteredComments); // hook is used in cases where it is not possible to independently influence code sections (third-party libraries, etc.)

  return (
    <ul>
      {values.map(({ id, name, body }) => (
        <Comment key={id} name={name} body={body} />
      ))}
    </ul>
  );
};

export default Comments;
