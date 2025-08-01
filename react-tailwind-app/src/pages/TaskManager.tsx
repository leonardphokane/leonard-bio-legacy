import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching tasks:', err);
        setError('Failed to load tasks');
        setLoading(false);
      });
  }, []);

  const filteredTasks = tasks.filter(task =>
    filter === 'completed' ? task.completed :
    filter === 'pending' ? !task.completed : true
  );

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Task Manager</h1>

      <div className="flex gap-2">
        <Button variant="primary" onClick={() => setFilter('all')}>All</Button>
        <Button variant="secondary" onClick={() => setFilter('completed')}>Completed</Button>
        <Button variant="danger" onClick={() => setFilter('pending')}>Pending</Button>
      </div>

      {loading && <p>Loading tasks...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid gap-4">
        {filteredTasks.map(task => (
          <Card key={task.id} title={task.title}>
            <p>Status: {task.completed ? '✅ Completed' : '⏳ Pending'}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
