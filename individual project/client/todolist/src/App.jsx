import './App.css';
import readTodosRequest from './api/readTodosRequest';
import readMovieRequest from './api/readMovieRequest';
import {useQuery} from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';
import {TodoItem} from './components/TodoItem';
import { CreateTodoForm } from './components/CreateTodoForm';
import { useState } from 'react';
import { useEffect } from 'react';

//AT 1:46:45 in video

function App() {

  const { isLoading, data: todos } = useQuery(
    'todos', 
    readTodosRequest
    );

  /*
  The program is able to process this and still output the todos request,
  so there is not an issue with calling this. Likely an issue 
  with the URL construction in readMovieRequest and if not an issue
  there than it is just the fact that I have not output any of the data
  */
  //area in return where isLoadingMov is currently causing an issue, removing it makes it work.

  /*
  const { isLoadingMov, data: movies } = useQuery(
    'movies', 
    readMovieRequest,
    );

  print(movies["results"]);
  */

  const [results, movies] = useState([]);

  useEffect(() => {
    readMovieRequest().then(movies);
  }, [])

  //movieResults = movies["results"];

  /*
    {results.map((result) => (
        <div>
          {result.page}
        </div>
      ))}
  */

  return (
    <div className="App">
      <h1>Todo Application</h1>
      
      <p>Current Page</p>
      {results.page}
      <p>Total Pages</p>
      {results.total_pages}
      <p>Total Results</p>
      {results.total_results}

      <p>Testing trying to get a title</p>
      {results.results[0].title}

      <p>Testing trying to get a date</p>
      {results.results[0].release_date}

      <p>Testing putting title and date together</p>
      {results.results[0].title + ": " + results.results[0].release_date}

      

      {isLoading ? (
        <ClipLoader size={150} />
       ) : (
          todos.map((todo) => (
            <TodoItem todo={todo} key={todo._id} />
          ))
        )}
        
        <CreateTodoForm />
    </div>
  );
}

export default App
