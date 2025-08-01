// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { getRandomJoke } from '../api/jokeAPI'; // adjust path if needed
import { truncate } from '../utils/format';
import { useTheme } from '../hooks/useTheme';

const Home = () => {
  const { theme } = useTheme();
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const data = await getRandomJoke();
        setJoke(data.joke || 'No joke found!');
      } catch (error) {
        setJoke('Error fetching joke.');
      }
    };

    fetchJoke();
  }, []);

  return (
    <main className={`p-4 min-h-screen transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Joke Center</h1>
      <p className="text-lg">{truncate(joke, 120)}</p>
    </main>
  );
};

export default Home;
