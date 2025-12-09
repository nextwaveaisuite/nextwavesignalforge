"use client";

import { useState } from "react";

export default function IngestPage() {
  const [text, setText] = useState("");

  async function submit() {
    if (!text.trim()) return;

    await fetch("/api/signals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    alert("Signal ingested");
    setText("");
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>SignalForge MVP</h1>
      <h2>Ingest Signal</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        style={{ width: "100%", marginBottom: 12 }}
      />

      <button onClick={submit}>Submit</button>
    </main>
  );
}
