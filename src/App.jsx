import { useState, useEffect /*, useTransition */ } from 'react';

import Comments from './components/Comments';

const filterBySearch = (entities, search) =>
  entities.filter(({ name, body }) => name.toLowerCase().concat(body.toLowerCase()).includes(search.toLowerCase()));

const App = () => {
  // const [isPending, startTransition] = useTransition();
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const filteredComments = filterBySearch(comments, search);
  const handleSearch = (event) => {
    /* startTransition(() => {
      // wrap state updates that are not priority (priority is to input) --> this allows you to split user operations into chunks that do not block the overall thread
      setSearch(event.target.value);
    }); */
    setSearch(event.target.value);
  };

  return (
    <div>
      <input type='text' onChange={handleSearch} />
      {/* isPending is optional to use */}
      {/* {isPending && <p>Pending...</p>} */}
      <Comments filteredComments={filteredComments} />
    </div>
  );
};

export default App;
