const BASE_URL = 'https://v2.jokeapi.dev/joke';

export const fetchJoke = async (): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL}/Any?type=single`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching joke:', error);
    return null;
  }
};
