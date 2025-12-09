'use client';
import { useEffect, useState } from 'react';

export default function BuildBoard() {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/signals').then(res => res.json()).then(setRows);
  }, []);

  return (
    <div>
      <h2>Build Board</h2>
      <pre>{JSON.stringify(rows, null, 2)}</pre>
    </div>
  );
}