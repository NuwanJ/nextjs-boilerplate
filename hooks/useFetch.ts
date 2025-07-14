import { useEffect, useState } from 'react';

export function useFetch<T = any>(path: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = (await res.json()) as T;
        setData(json);
      } catch (err) {
        setError(err as Error);
      }
    }
    fetchData();
  }, [path]);

  return { data, error };
}
