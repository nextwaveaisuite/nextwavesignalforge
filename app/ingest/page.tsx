'use client';
import { useState } from 'react';

export default function Ingest() {
  const [text, setText] = useState('');

  async function submit() {
    await fetch('/api/ingest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ raw_text: text })
    });
    alert('Signal ingested');
    setText('');
  }

  return (
    <div>
      <h2>Ingest Signal</h2>
      <textarea value={text} onChange={e=>setText(e.target.value)} />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}