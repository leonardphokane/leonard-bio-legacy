import { useState, useEffect } from 'react';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export function useTasks(limit = 10) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch tasks:', err);
        setError('Something went wrong');
        setLoading(false);
      });
  }, [limit]);

  return { tasks, loading, error };
}
