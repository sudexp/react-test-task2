import { useState, useEffect } from 'react';

import Comment from './components/Comment';

const filterBySearch = (entities, search) =>
  entities.filter(({ name, body }) => name.toLowerCase().concat(body.toLowerCase()).includes(search.toLowerCase()));

const App = () => {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const filteredComments = filterBySearch(comments, search);
  const handleSearch = (event) => setSearch(event.target.value);

  return (
    <div>
      <input type='text' onChange={handleSearch} />
      <ul>
        {filteredComments.map(({ id, name, body }) => (
          <Comment key={id} name={name} body={body} />
        ))}
      </ul>
    </div>
  );
};

export default App;
