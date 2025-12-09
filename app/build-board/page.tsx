export const dynamic = "force-dynamic";

async function getData() {
  const res = await fetch("/api/build-board", {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function BuildBoardPage() {
  const data = await getData();

  return (
    <main style={{ padding: 24 }}>
      <h1>SignalForge MVP</h1>
      <h2>Build Board</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
