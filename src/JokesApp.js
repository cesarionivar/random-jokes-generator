import React, { useEffect, useState } from 'react';
import { fetchJoke } from './utils/fetchJoke';

const JokesApp = () => {
  const [joke, setJoke] = useState({});

  const getJoke = async () => {
    const jokeObj = await fetchJoke();
    setJoke(jokeObj);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className='jokesApp'>
      <div className='jokesApp__container'>
        <h2>Random Jokes Generator</h2>
        <p>{joke?.joke}</p>
        <button onClick={getJoke}>Generate another one</button>
      </div>
    </div>
  );
};

export default JokesApp;
