'use client';

import { useFetch } from '@/hooks/useFetch';
import { useCountStore } from '@/store/useCountStore';

export default function Home() {
  const { count, increment, decrement } = useCountStore();
  const { data, error } = useFetch('/posts/1');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to NextJS Boilerplate Template </h1>
      <div className="mt-4 flex items-center space-x-2">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div className="mt-4">
        {error && <p>Error: {error.message}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </main>
  );
}
